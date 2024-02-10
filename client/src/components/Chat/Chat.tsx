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
  const daysRef = useRef<any>(null);

  useEffect(() => {
    setDayPacksOfMessages([
      {
        day: "10 January",
        messages: [
          {
            id: 0,
            author: "@oleg_1032",
            text: "Ratsia ne robe",
            time: "10:25",
          },
          {
            id: 1,
            author: "@oleg_1032",
            text: "Zyvit bolyt",
            time: "10:26",
          },
          {
            id: 2,
            author: "@oleg_1032",
            text: "Telephon ne daly",
            time: "10:27",
          },
          {
            id: 3,
            author: "@petro_mostavchuk",
            text: "I am alive",
            time: "10:28",
          },
          {
            id: 4,
            author: "@yulia_tymoshenko",
            text: "Hello everyone, I am woman-головнокомандувач",
            time: "10:29",
          },
        ],
      },
      {
        day: "11 January",
        messages: [
          {
            id: 5,
            author: "@oleg_1032",
            text: "Ratsia ne robe",
            time: "10:25",
          },
          {
            id: 6,
            author: "@oleg_1032",
            text: "Zyvit bolyt",
            time: "10:26",
          },
          {
            id: 7,
            author: "@oleg_1032",
            text: "Telephon ne daly",
            time: "10:27",
          },
          {
            id: 8,
            author: "@petro_mostavchuk",
            text: "I am alive",
            time: "10:28",
          },
          {
            id: 9,
            author: "@yulia_tymoshenko",
            text: "Hello everyone, I am woman-головнокомандувач",
            time: "10:29",
          },
        ],
      },
      {
        day: "12 January",
        messages: [
          {
            id: 10,
            author: "@oleg_1032",
            text: "Ratsia ne robe",
            time: "10:25",
          },
          {
            id: 11,
            author: "@oleg_1032",
            text: "Zyvit bolyt",
            time: "10:26",
          },
          {
            id: 12,
            author: "@oleg_1032",
            text: "Telephon ne daly",
            time: "10:27",
          },
          {
            id: 13,
            author: "@petro_mostavchuk",
            text: "I am alive",
            time: "10:28",
          },
          {
            id: 14,
            author: "@yulia_tymoshenko",
            text: "Hello everyone, I am woman-головнокомандувач",
            time: "10:29",
          },
        ],
      },
      {
        day: "13 January",
        messages: [
          {
            id: 0,
            author: "@oleg_1032",
            text: "Ratsia ne robe",
            time: "10:25",
          },
          {
            id: 1,
            author: "@oleg_1032",
            text: "Zyvit bolyt",
            time: "10:26",
          },
          {
            id: 2,
            author: "@oleg_1032",
            text: "Telephon ne daly",
            time: "10:27",
          },
          {
            id: 3,
            author: "@petro_mostavchuk",
            text: "I am alive",
            time: "10:28",
          },
          {
            id: 4,
            author: "@yulia_tymoshenko",
            text: "Hello everyone, I am woman-головнокомандувач",
            time: "10:29",
          },
        ],
      },
    ]);

    setTimeout(() => daysRef?.current?.scrollTo(0, 99999), 0);
  }, []);

  const onSendMessage = () => {
    console.log(messageForSending);

    daysRef?.current?.scrollTo(0, 99999);
  };

  return (
    <div className={styles.root}>
      <ul className={styles.days} ref={daysRef}>
        {dayPacksOfMessages.reverse().map((pack) => (
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
        ))}
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
