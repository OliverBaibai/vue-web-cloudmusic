import utils from '@/utils/utils'
import * as types from './mutation-type'
import {
    playMode
} from '@/common/playConfig'
import {
    saveSearch,
    deleteSearch,
    clearSearch,
    saveHistory,
    deleteHistory,
    clearHistory
} from '@/common/cache'

function findIndex(list, song) {
    return list.findIndex(item => {
        return item.id === song.id
    })
}

export const selectPlay = function ({
    commit,
    state
}, {
    list,
    index
}) {
    commit(types.SET_SEQUENCE_LIST, list)
    if (state.mode === playMode.random) {
        let randomList = utils.shuffle(list)
        commit(types.SET_PLAYLIST, randomList)
        index = findIndex(randomList, list[index])
    } else {
        commit(types.SET_PLAYLIST, list)
    }
    commit(types.SET_CURRENT_INDEX, index)
    commit(types.SET_PLAYING_STATE, true)
}

export const playAll = function ({
    commit
}, {
    list
}) {
    console.log(list);
    commit(types.SET_PLAY_MODE, playMode.sequence)
    commit(types.SET_PLAYLIST, list)
    commit(types.SET_SEQUENCE_LIST, list)
    commit(types.SET_CURRENT_INDEX, 0)
    commit(types.SET_PLAYING_STATE, true)
}

export const pausePlay = function ({
    commit
}) {
    commit(types.SET_PLAYING_STATE, false)
}