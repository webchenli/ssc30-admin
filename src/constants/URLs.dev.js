/**
 * 配置后端服务器的IP和端口
 */

/**
 * 是否启用后端的开发用服务器
 * * 0 使用本地的expressjs服务器伪造数据
 * * 1 使用后端开发人员提供的开发机上跑的服务
 * * 2 使用后端提供的测试服务器
 */
const DEV_BACKEND_INDEX = 0;

// 本地开发环境，使用swagger作为后端
const LOCAL_EXPRESS_SERVER = '127.0.0.1:3009';
// 郭老师私服
const GBH_SERVER = '10.1.218.36:8080';
// 后端某台测试服务器
const DEV_SERVER = '10.3.14.240';

/**
 * 友账表
 */

const SCHEME = 'http';
const HOST_PORT = [
  LOCAL_EXPRESS_SERVER,
  GBH_SERVER,
  DEV_SERVER
][DEV_BACKEND_INDEX];
const PATH_PREFIX = '/ficloud';

// scheme:[//[user:password@]host[:port]][/]path[?query][#fragment]
const makeURL = path => `${SCHEME}://${HOST_PORT}${PATH_PREFIX}${path}`;

/**
 * 通用接口
 */

// 基础档案 模型查询接口
export const FICLOUDPUB_INITGRID_URL = makeURL('/ficloud_pub/initgrid');
// 基础档案 数据查询接口
export const getAddURL = type => `${SCHEME}://${HOST_PORT}${PATH_PREFIX}/${type}/add`;
export const getSaveURL = type => `${SCHEME}://${HOST_PORT}${PATH_PREFIX}/${type}/save`;
export const getDeleteURL = type => `${SCHEME}://${HOST_PORT}${PATH_PREFIX}/${type}/delete`;
export const getQueryURL = type => `${SCHEME}://${HOST_PORT}${PATH_PREFIX}/${type}/query`;
export const getEnableURL = type => `${SCHEME}://${HOST_PORT}${PATH_PREFIX}/${type}/turnenable`;

// 参照 查询接口
export const ReferDataURL = makeURL('/refbase_ctr/queryRefJSON');
export const ReferUserDataURL = makeURL('/userCenter/queryUserAndDeptByDeptPk');

/**
 * 转换规则模型
 */

export const MAPPING_DEF_QUERY_URL = makeURL('/mappingdef/query');
export const MAPPING_DEF_SAVE_URL = makeURL('/mappingdef/save');
export const MAPPING_DEF_DELETE_URL = makeURL('/mappingdef/delete');

/**
 * 实体映射模型 exchanger/entitymap.md
 */

// 左树查询服务
// export const OUTER_ENTITY_TREE_URL = makeURL('/template/tree');
export const OUTER_ENTITY_TREE_URL = makeURL('/outerentitytree/querymdtree');
// 左树节点查询服务
// export const OUTER_ENTITY_TREE_NODE_CHILDREN_URL = makeURL('/template/node');
// 右表查询服务
export const OUTER_ENTITY_TREE_NODE_DATA_URL = makeURL('/outerentitytree/querynodedata');
export const OUTER_ENTITY_TREE_ADD_NODE_DATA_URL = makeURL('/outerentitytree/addnodedata');
export const OUTER_ENTITY_TREE_UPDATE_NODE_DATA_URL = makeURL('/outerentitytree/updatenodedata');
export const OUTER_ENTITY_TREE_DEL_NODE_DATA_URL = makeURL('/outerentitytree/delnodedata');