import React, { useState, useEffect } from 'react';
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import InsertEmoticon from '@material-ui/icons/InsertEmoticon';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import Mic from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';

function Chat() {
    return (
        <div className="chat">

            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h1> Nome da sala</h1>
                    <p> Ultima vez visto..</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>

                </div>
            </div>

            <div className="chat__body">
                <p className="chat__message">
                    <p className="chat__name">
                        Matheus Shiro
                    </p>
                    Eai meu mano

                    <p className="chat__timestamp">
                        15:27
                    </p>
                </p>

                <p className="chat__message chat__reciever">
                    Eai meu mano
                    <p className="chat__timestamp">
                        15:27
                    </p>
                </p>

            </div>

            <div className="chat__footer">
                <InsertEmoticon/>
                <AttachFileIcon/>
                <form>
                    <input placeholder="Digite uma mensagem" type="text"/>
                    <button type="submit" style={{display: 'none'}}>  </button>
                </form>


                <SendIcon/>
                {/* <Mic/> */}
            </div>

        </div>
    )
}

export default Chat
