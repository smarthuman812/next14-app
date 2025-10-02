"use client";

import { useState } from 'react';
import styles from './page.module.css';
import { fetcher } from '@/lib/fetcher';

type PingResponse = {
  ok: boolean;
  ts: string;
  region: string;
};

type EchoResponse<T> = {
  ok: boolean;
  data: T;
};

type TelegramResponse = {
  ok: boolean;
};

export default function HomePage() {
  const [logs, setLogs] = useState<string[]>([]);

  const appendLog = (message: string) => {
    setLogs((prev) => [...prev, message]);
  };

  const handlePing = async () => {
    try {
      const res = await fetcher<PingResponse>('/api/ping');
      appendLog(`Ping → ${JSON.stringify(res)}`);
    } catch (err: any) {
      appendLog(`Ping Error → ${err.message}`);
    }
  };

  const handleEcho = async () => {
    try {
      const payload = { hello: 1337 };
      const res = await fetcher<EchoResponse<typeof payload>>('/api/echo', {
        method: 'POST',
        body: JSON.stringify(payload),
      });
      appendLog(`Echo → ${JSON.stringify(res)}`);
    } catch (err: any) {
      appendLog(`Echo Error → ${err.message}`);
    }
  };

  const handleTelegram = async () => {
    try {
      const secret = process.env.NEXT_PUBLIC_TELEGRAM_WEBHOOK_SECRET || '';
      const res = await fetcher<TelegramResponse>('/api/telegram', {
        method: 'POST',
        headers: {
          'x-telegram-secret': secret,
        },
        body: JSON.stringify({}),
      });
      appendLog(`Telegram → ${JSON.stringify(res)}`);
    } catch (err: any) {
      appendLog(`Telegram Error → ${err.message}`);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Next14 API Demo</h1>
      <button className={styles.button} onClick={handlePing}>
        Ping
      </button>
      <button className={styles.button} onClick={handleEcho}>
        Echo Sample
      </button>
      <button className={styles.button} onClick={handleTelegram}>
        Telegram Test
      </button>
      <div className={styles.log}>
        {logs.map((log, index) => (
          <div key={index}>{log}</div>
        ))}
      </div>
    </div>
  );
}