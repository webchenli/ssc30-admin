import update from 'react-addons-update';
import { handleActions } from 'redux-actions';

import * as ActionTypes from '../actions/mappingDef';

const initState = {
  // 表头
  tableColumnsModelloading: false,
  tableColumnsModelloaded: false,
  tableColumnsModel: [], // 表格/表单字段模型
  // 表体
  tableBodyDataLoading: false,
  tableBodyDataLoaded: false,
  tableBodyData: [],
  // 表格分页
  itemsPerPage: 15, // TODO 常量不应该放在这里
  startIndex: 0,
  activePage: 1,
  // 页面错误提示
  pageAlert: {
    show: false,
    bsStyle: 'danger', // one of: "success", "warning", "danger", "info"
    message: ''
  },
  // 表单错误提示
  serverMessage: '',
  // 编辑对话框
  editDialog: {
    show: false,
    rowIdx: null // 当前编辑框对应表格的行index
  },
  editFormData: {},
  // 创建对话框
  createDialog: {
    show: false
  },
  createFormData: {}
};

// Show case for redux-actions
export default handleActions({

  // 获得表体数据
  [ActionTypes.CONVERSION_RULE_DEFINITION_REQUEST]: (state) => ({...state,
    tableBodyDataLoading: true
  }),
  [ActionTypes.CONVERSION_RULE_DEFINITION_SUCCESS]: (state, action) => ({...state,
    tableBodyDataLoading: false,
    tableBodyDataLoaded: true,
    tableBodyData: [...action.payload.data.data]
  }),
  [ActionTypes.CONVERSION_RULE_DEFINITION_FAILURE]: (state, action) => ({...state,
    tableBodyDataLoading: false,
    tableBodyDataLoaded: false,
    pageAlert: {...state.pageAlert,
      show: true,
      bsStyle: action.payload.bsStyle,
      message: action.payload.message
    }
  }),

  // 获取表头数据
  [ActionTypes.TABLE_COLUMNS_MODEL_REQUEST]: (state) => ({...state,
    tableColumnsModelloading: true
  }),
  [ActionTypes.TABLE_COLUMNS_MODEL_SUCCESS]: (state, action) => ({...state,
    tableColumnsModelloading: false,
    tableColumnsModelloaded: true,
    tableColumnsModel: [...action.payload.data]
  }),
  [ActionTypes.TABLE_COLUMNS_MODEL_FAILURE]: (state, action) => ({...state,
    tableColumnsModelloading: false,
    tableColumnsModelloaded: false,
    pageAlert: {...state.pageAlert,
      show: true,
      bsStyle: action.payload.bsStyle,
      message: action.payload.message
    }
  }),

  /**
   * 用于显示错误的tooltip
   */

  [ActionTypes.SHOW_PAGE_ALERT]: (state, action) => update(state, {
    pageAlert: {
      show: {$set: action.show}
    }
  }),

  /**
   * 带表单的创建/编辑对话框
   */
  [ActionTypes.MAPPING_DEF_EDIT_DIALOG_SHOW]: (state, action) => ({...state,
    editDialog: {
      show: action.show,
      rowIdx: action.rowIdx
    },
    editFormData: action.editFormData
  }),
  [ActionTypes.MAPPING_DEF_CREATE_DIALOG_SHOW]: (state, action) => ({...state,
    createDialog: {
      show: action.show
    },
    createFormData: action.createFormData
  })

}, initState);
