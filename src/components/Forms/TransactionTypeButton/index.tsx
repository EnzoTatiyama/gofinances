import React from "react";
import { RectButtonProps } from 'react-native-gesture-handler';

import { 
    Container,
    Icon,
    Title,
} from "./styles";

const icons = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle'
}

interface Props extends RectButtonProps {
    type: 'up' | 'down';
    title: string;
    isActive: boolean;
    onPress: () => void;
}

export function TransactionTypeButton({
    type,
    title, 
    isActive,
    onPress,
    ...rest
} : Props) {
    return(
        <Container 
            {...rest}
            onPress={onPress}
            type={type}
            isActive={isActive}>
            <Icon 
                name={icons[type]}
                type={type} />
            <Title>
                {title}
            </Title>
        </Container>
    );
}