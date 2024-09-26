import { WaitingStatus } from "@linenow-types/status";
import { Booth } from "@interfaces/booth";

export interface GetWaitingsResponse {
  waitings: GetWaitingsResponseData[];
}

export interface GetWaitingsResponseData {
  waitingID: number;
  waitingCount?: number;

  booth: Booth;
  partySize: number;

  waitingStatus: WaitingStatus;
  readyToConfirmAt?: string;
  confirmedAt?: string;
  canceledAt?: string;
}