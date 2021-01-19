import React, { useState } from 'react';
import { ActivityIndicator, Alert } from 'react-native';

import api from '../../config/api';

import { ScrollView } from 'react-native-gesture-handler';
import { Container, TitleInput, InputForm, BtnSubmitForm, TxtSubmitForm, TitleRequired, LoadingArea } from './styles';

export default function Orcamento() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [whatsApp, setWhatsApp] = useState('');
    const [msg, setMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const cadOrcamento = async () => {
        /*Alert.alert("", "Enviar para API" + name);*/
        if(!validade()) return;

        setLoading(true);

        await api.post('/orcamento',{name, email, phone, whatsApp, msg})
        .then((response) => {
            Alert.alert("", response.data.message);
            setLoading(false);
        }).catch((err) => {
            if(err.response){
                Alert.alert("", err.response.data.message);
            }else{
                Alert.alert("", "Erro: Solicitação de orçamento não enviado com sucesso, tente mais tarde!");
            }
            setLoading(false);
        });
    }

    const validade = () =>{
        if(!name){
            Alert.alert("", "Preencha o campo nome!");
            return false;
        }
        if(!email){
            Alert.alert("", "Preencha o campo e-mail!");
            return false;
        }
        if(!phone){
            Alert.alert("", "Preencha o campo telefone!");
            return false;
        }
        if(!whatsApp){
            Alert.alert("", "Preencha o campo whatsApp!");
            return false;
        }
        if(!msg){
            Alert.alert("", "Preencha o campo conteúdo!");
            return false;
        }

        return true;
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Container>
                <TitleInput>* Nome</TitleInput>
                <InputForm
                    placeholder="Nome completo"
                    value={name}
                    editable={!loading}
                    onChangeText={text => setName(text)}
                />

                <TitleInput>* E-mail</TitleInput>
                <InputForm
                    placeholder="Seu melhor e-mail"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    editable={!loading}
                    onChangeText={text => setEmail(text)}
                />

                <TitleInput>* Telefone</TitleInput>
                <InputForm
                    placeholder="(XX) XXXX-XXXX"
                    value={phone}
                    editable={!loading}
                    onChangeText={text => setPhone(text)}
                />

                <TitleInput>* WhatsApp</TitleInput>
                <InputForm
                    placeholder="(XX) XXXX-XXXX"
                    value={whatsApp}
                    editable={!loading}
                    onChangeText={text => setWhatsApp(text)}
                />

                <TitleInput>* Conteúdo</TitleInput>
                <InputForm
                    placeholder="Fale um pouco do seu projeto"
                    value={msg}
                    editable={!loading}
                    onChangeText={text => setMsg(text)}
                />

                <TitleRequired>* Campo Obrigatório</TitleRequired>

                <BtnSubmitForm disabled={loading} onPress={cadOrcamento}>
                    <TxtSubmitForm>
                        Enviar
                    </TxtSubmitForm>
                </BtnSubmitForm>

            {loading && 
                <LoadingArea>
                    <ActivityIndicator size="large" color="#fff" />
                </LoadingArea>
            }
            </Container>
        </ScrollView>
    );
}