export enum Permission {
  // Admin permissions
  LOGIN = 'login',
  USER_ADD = 'user_add',
  USER_UPDATE = 'user_update',
  USER_DELETE = 'user_delete',
  PRODUCT_ADD = 'product_add',
  PRODUCT_UPDATE = 'product_update',
  PRODUCT_DELETE = 'product_delete',

  // Customer permissions
  // (product add, update, delete are shared with admin)
}
