import React from 'react'
import { Fontisto} from '@expo/vector-icons'
import { Background } from '../../components/Background'
import { Header } from '../../components/Header'
import { BorderlessButton } from 'react-native-gesture-handler'
import { ListHeader } from '../../components/ListHeader'
import { Member } from '../../components/member'
import { ListDivider } from '../../components/ListDivider'
import { ButtonIcon } from '../../components/Buttonicon'



import {
    ImageBackground,
    Text,
    View,
    FlatList
} from 'react-native'

import bannerImg from '../../assets/banner.png'


import { theme } from '../../Global/styles/theme'
import { styles } from '../../screens/AppoinntmentDetails/styles'

export function AppointmentDetails(){
    const members = [
        {
            id: '1',
            username: 'Mateus',
            avatar_url: 'https://github.com/rodrigorgtic.png',
            status: 'Online'
        },
        {
            id: '2',
            username: 'LuanCovid19',
            avatar_url: 'https://github.com/rodrigorgtic.png',
            status: 'Offline'
        }
    ]
    return(
        <Background>
            <Header 
                title='Detalhes'
                action={
                    <BorderlessButton>
                        <Fontisto 
                            name="share"
                            size={30}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />
            <ImageBackground
                style={styles.banner}
                source={bannerImg}
            >
                <View style={styles.bannerContent}> 
                    <Text style={styles.title}>
                    Lendarios
                    </Text>

                    <Text
                    style={styles.subtitle}
                    >
                    É hoje que vamos chegar ao challenger sem perde uma partida de md10   
                    </Text>
                </View>
            </ImageBackground>

            <ListHeader 
                title='Jogadores'
                subtitle='total 3'
            />

            <FlatList 
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item  }) => (
                    <Member
                    data={item} />
                        
                )}
                ItemSeparatorComponent={() => <ListDivider/>}
                style={styles.members}
            />
           <View style={styles.footer}>
                <ButtonIcon 
                    title='Entre na partida'/>
            </View>
        </Background>
    )
}