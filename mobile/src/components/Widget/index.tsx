import React, {useRef, useState} from 'react';
import {  TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';
import { styles } from './styles';
import { theme } from '../../theme';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Options } from '../Options';
import { Form } from '../Form';
import { Success } from '../Success';
import { feedbackTypes } from '../../utils/feedbackTypes';
export type FeedbackType = keyof typeof feedbackTypes;

function Widget() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false);
    const bottomSheet = useRef<BottomSheet>(null)
    function hadleOpen(){
        bottomSheet.current?.expand()
    }
    
    function hadleRestartFeedback(){
        setFeedbackType(null);
        setFeedbackSent(false);
    }
    function hadleFeedbackSent(){
        setFeedbackSent(true);
    }


    return (
        <>
            <TouchableOpacity
                style={styles.button}
                onPress={hadleOpen}
            >
                <ChatTeardropDots
                    size={24}
                    weight="bold"
                    color={theme.colors.text_on_brand_color}
                />
            </TouchableOpacity>
            <BottomSheet
                ref={bottomSheet}
                snapPoints={[1, 280]}
                backgroundStyle={styles.modal}
                handleIndicatorStyle={styles.indicator}
            >
                {
                    feedbackSent?
                        <Success
                            onSendAnotherFeedback={hadleRestartFeedback}
                        />
                    :
                    <>
                        {
                            feedbackType?
                            <Form
                                feedbackType={feedbackType}
                                onFeedbackCanceled={hadleRestartFeedback}
                                onFeedbackSent={hadleFeedbackSent}
                            />:
                            <Options
                                onFeedbackTypeChanged={setFeedbackType}
                            />
                        }
                    </>

                }
            </BottomSheet>
        </>
    );
}

export default gestureHandlerRootHOC(Widget);