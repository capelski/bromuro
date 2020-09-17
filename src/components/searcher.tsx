import React from 'react';
import { View, TextInput } from 'react-native';
import { Path } from 'react-native-svg';
import { allStyles } from '../styles';
import { Theme } from '../types';
import { Button } from './buttons/button';

interface SearcherProps {
    clearSearchHandler: () => void;
    displayLastJokeHandler: () => void;
    filter: string;
    setFilter: (filter: string) => void;
    theme: Theme;
}

export const Searcher: React.FC<SearcherProps> = (props) => {
    return (
        <View style={allStyles.searcher}>
            <TextInput
                value={props.filter}
                onChangeText={props.setFilter}
                onFocus={props.displayLastJokeHandler}
                style={allStyles.searcherInput}
            />
            {props.filter !== '' && (
                <Button
                    buttonStyle={allStyles.searcherClear}
                    onPress={props.clearSearchHandler}
                    viewBox="0 0 352 512"
                >
                    <Path
                        fill={props.theme.sentenceColor}
                        d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                    />
                </Button>
            )}
        </View>
    );
};
