import {Server} from 'socket.io';
import http, { createServer } from 'http';
import express from 'express';

const app = express();

const server = createServer(app)