import React from 'react'

import {
    View,
    Text
} from 'react-native'

import { styles } from './styles'

import { Avatar} from '../Avatar'
import { theme } from '../../Global/styles/theme'

   export type memberProps = {
        data: string;
        username: string;
        avatar_url: string;
        status: string;
    }

    type Props = {
        data: memberProps
    }

export function Member( { data} : Props){
    const { on, primary } = theme.colors
    const isOnline = data.status === 'Online'
    return (
        <View style={styles.container}>
            <Avatar
                urlImage={data.avatar_url} />

        <View>
            <Text
            style={styles.title}>
                {data.username}
             </Text>

             <View style={styles.status}>
                 <View
                   style={[
                    styles.bulletStatus,
                    {
                        backgroundColor: isOnline ? on : primary
                    }
                   ]}
                 />
                <Text style={styles.nameStatus}>
                    {isOnline ? 'Diponivel' : 'Ocupado'  }
                </Text>
             </View>
        </View>

        </View>
    )
}