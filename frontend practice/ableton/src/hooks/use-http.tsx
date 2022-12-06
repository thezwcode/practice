import { useReducer, useCallback } from "react";

enum HttpRequestType {
  SEND = "SEND",
  SUCCESS = "SUCCESS",
  FAIL = "FAIL",
}

interface IHttpRequest {
  status: string;
  error: string;
  data: any;
}

interface IHttpRequestAction {
  type: string;
  payload?: any;
}

const initialState: IHttpRequest = { status: "", error: "", data: null as any };

function init(initialState: IHttpRequest) {
  return { ...initialState };
}

function httpReducer(
  state: IHttpRequest,
  action: IHttpRequestAction
): IHttpRequest {
  switch (action.type) {
    case HttpRequestType.SEND:
      return {
        status: "pending",
        error: "",
        data: null as any,
      };
    case HttpRequestType.SUCCESS:
      return {
        status: "completed",
        error: "",
        data: { ...action.payload },
      };
    case HttpRequestType.FAIL:
      return {
        status: "completed",
        error: { ...action.payload },
        data: null as any,
      };
    default:
      return initialState;
  }
}

function useHttp(requestFunction: (requestData: any) => any) {
  console.log("http hook initiated!");
  const [httpState, dispatch] = useReducer(httpReducer, initialState);

  const sendRequest: (requestData: any) => void = useCallback(
    async (requestData: any) => {
      dispatch({ type: HttpRequestType.SEND });
      const response = await requestFunction(requestData);
      try {
        if (response.error) {
          throw Error(response.error);
        }
        console.log("successful http req");
        dispatch({ type: HttpRequestType.SUCCESS, payload: response });
      } catch (error) {
        console.log("fail http req");
        dispatch({ type: HttpRequestType.FAIL, payload: error });
      }
    },
    []
  );
  return {
    sendRequest,
    ...httpState,
  };
}

export default useHttp;
