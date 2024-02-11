import { useState, useEffect, useRef } from "react";
import {
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import styles from "./Chat.module.scss";

const Chat = () => {
  const [dayPacksOfMessages, setDayPacksOfMessages] = useState<any[]>([]);
  const [messageForSending, setMessageForSending] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(true);
  const daysRef = useRef<any>(null);

  useEffect(() => {
    setLoading(false);

    setTimeout(() => daysRef?.current?.scrollTo(0, 99999), 0);
  }, []);

  const onSendMessage = () => {
    console.log(messageForSending);

    daysRef?.current?.scrollTo(0, 99999);
  };

  if (isLoading) {
    return <>loading...</>;
  }

  return (
    <div className={styles.root}>
      <ul className={styles.days} ref={daysRef}>
        {dayPacksOfMessages.length ? dayPacksOfMessages.reverse().map((pack) => (
          <li key={pack.day} className={styles.dayPack}>
            <div className={styles.dayContainer}>
              <b className={styles.day}>{pack.day}</b>
            </div>
            <ul className={styles.messages}>
              {pack.messages.reverse().map((message: any) => (
                <li key={message.id} className={styles.message}>
                  <p className={styles.time}>{message.time} |</p>
                  <b className={styles.messageAuthor}>{message.author}: </b>
                  <p>{message.text}</p>
                </li>
              ))}
            </ul>
          </li>
        )) : <p className={styles.noMessage}>no message yet</p>}
      </ul>
      <FormControl fullWidth variant="outlined">
        <OutlinedInput
          type="text"
          placeholder="Write a message"
          value={messageForSending}
          onChange={(e) => setMessageForSending(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={onSendMessage} edge="end">
                <SendIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
};

export default Chat;
