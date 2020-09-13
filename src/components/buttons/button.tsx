import React from 'react';
import { TouchableOpacity, StyleProp } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export interface ButtonBaseProps {
    buttonStyle: StyleProp<any>;
    fillColor: string;
    onPress: () => void;
}

interface ButtonProps extends ButtonBaseProps {
    path: string;
    viewBox?: string;
}

export const Button: React.FC<ButtonProps> = (props) => (
    <TouchableOpacity onPress={props.onPress} style={props.buttonStyle}>
        <Svg height={32} width={32} viewBox={props.viewBox || '0 0 492 492'}>
            <Path fill={props.fillColor} d={props.path} />
        </Svg>
    </TouchableOpacity>
);
