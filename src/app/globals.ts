export class Globals {
  public static get APP_NAME(): string { return  'OJBento'; }
  public static get APP_TAB_TITLE(): string { return this.APP_NAME; }
  public static get APP_TAB_SEPERATOR(): string { return ' - '; }
  public static get APP_API(): string { return 'http://api.ojbento.fr/'; }
  public static get APP_USER_TOKEN(): string { return 'id-token'; }
  public static get APP_USER(): string { return 'user-data'; }
}
