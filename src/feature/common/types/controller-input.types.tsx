import { IncomingHttpHeaders } from 'http';
import { NextApiRequest, NextApiResponse } from 'next';

export interface ControllerInput<ReqestBody = any, ResponseData = any> {
  headers?: IncomingHttpHeaders;
  query?: NextApiRequest['query'];
  body?: ReqestBody;
  res: NextApiResponse<ResponseData>;
}
