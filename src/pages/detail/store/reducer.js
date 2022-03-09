import {fromJS} from "immutable";
import * as constants from './constants';
import React from "react";

const defaultState = fromJS({
    id:'1',
    title:'',
    content: ''
});

export default (state = defaultState, action) => {

    switch (action.type) {
        case constants.CHANGE_DETAIL:
            return state.merge({
                title: action.title,
                content: action.content,
                id: action.id
            });
        default:
            return state;
    }
}
