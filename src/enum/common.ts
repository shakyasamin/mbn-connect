export enum Status {
  Idle,
  Pending,
  Loading,
  Succeeded,
  Failed,
}

/**
 * @type
 * Represent cookies key type
 */
export type COOKIES_TYPE = "access_token" | "refresh_token";

/**
 * @enum
 * To identify if searched data is showing or all data is showing
 */
export enum ShowingDataType {
  Searched,
  All,
}

/**
 * @enum
 * Represent status for adding, viewing or editing items on a table.
 */
export enum FieldStatus {
  Idle,
  View,
  Edit,
  Add,
}

/**
 * @enum
 * For table sort
 */
export enum OrderBy {
  Ascending,
  Descending,
}
