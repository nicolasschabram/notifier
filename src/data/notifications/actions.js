export const ADD = "notifications/add";
export const CLOSE = "notifications/close";

export function addNotification(header, body, type) {
  return {
    type: ADD,
    header: header,
    body: body,
    notificationType: type
  };
}

export function closeNotification(id) {
  return {
    type: CLOSE,
    id: id
  }
}
