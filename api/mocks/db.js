const utils = require('./utils');
const fs = require('fs');


module.exports = {
  db: db
};

const DB_TABLE = {};

DB_TABLE.dept = function () {
  var db_table = {};
  db_table.head = [
    utils.string('id', '主键', 40),
    utils.string('code', '部门编码', 40),
    utils.string('name', '部门名称', 200),
    utils.string('name2', '名称2', 200),
    utils.string('name3', '名称3', 200),
    utils.string('name4', '名称4', 200),
    utils.string('name5', '名称5', 200),
    utils.string('name6', '名称6', 200),
    utils.ref('parentid', '所属上级'),
    utils.ref('person', '部门主管'),
    utils.boolean('enable', '启用'),
    utils.string('description', '备注', 500)
  ];
  // TODO; 去掉没用的`'value':`
  db_table.body = [
    {'id': '11', 'cols': [
      {value: '11'},
      {value: '263X2016111400000081'},
      {value: '部门1'},
      {value: null},
      {value: null},
      {value: null},
      {value: null},
      {value: null},
      {value: {
        id: '384982394',
        code: '1243',
        name: '上级1'
      }},
      {value: {
        id: 'a384982394',
        code: 'a1243',
        name: '主管1'
      }},
      {value: true},
      {value: '备注1'}
    ]},
    {'id': '22', 'cols': [
      {value: '22'},
      {value: 'D32016091200000022'},
      {value: '部门2'},
      {value: null},
      {value: null},
      {value: null},
      {value: null},
      {value: null},
      {value: {
        id: '384982394',
        code: '1243',
        name: '上级1'
      }},
      {value: {
        id: 'a384982394',
        code: 'a1243',
        name: '主管1'
      }},
      {value: false},
      {value: '备注2'}
    ]},
    {'id': '33', 'cols': [
      {value: '33'},
      {value: '263X2016083000000025'},
      {value: '部门3'},
      {value: null},
      {value: null},
      {value: null},
      {value: null},
      {value: null},
      {value: {
        id: '384982394',
        code: '1243',
        name: '上级1'
      }},
      {value: {
        id: 'a384982394',
        code: 'a1243',
        name: '主管1'
      }},
      {value: true},
      {value: '备注3'}
    ]},
    {'id': '44', 'cols': [
      {value: '44'},
      {value: '263X2016083000000025'},
      {value: '部门4'},
      {value: null},
      {value: null},
      {value: null},
      {value: null},
      {value: null},
      {value: {
        id: '384982394',
        code: '1243',
        name: '上级1'
      }},
      {value: {
        id: 'a384982394',
        code: 'a1243',
        name: '主管1'
      }},
      {value: true},
      {value: '备注4'}
    ]},
    {'id': '55', 'cols': [
      {value: '55'},
      {value: '263X2016083000000025'},
      {value: '部门5'},
      {value: null},
      {value: null},
      {value: null},
      {value: null},
      {value: null},
      {value: {
        id: '384982394',
        code: '1243',
        name: '上级1'
      }},
      {value: {
        id: 'a384982394',
        code: 'a1243',
        name: '主管1'
      }},
      {value: true},
      {value: '备注5'}
    ]},
    {'id': '66', 'cols': [
      {value: '66'},
      {value: '263X2016083000000025'},
      {value: '部门6'},
      {value: null},
      {value: null},
      {value: null},
      {value: null},
      {value: null},
      {value: {
        id: '384982394',
        code: '1243',
        name: '上级1'
      }},
      {value: {
        id: 'a384982394',
        code: 'a1243',
        name: '主管1'
      }},
      {value: true},
      {value: '备注6'}
    ]},
    {'id': '77', 'cols': [
      {value: '77'},
      {value: '263X2016083000000025'},
      {value: '部门7'},
      {value: null},
      {value: null},
      {value: null},
      {value: null},
      {value: null},
      {value: {
        id: '384982394',
        code: '1243',
        name: '上级1'
      }},
      {value: {
        id: 'a384982394',
        code: 'a1243',
        name: '主管1'
      }},
      {value: true},
      {value: '备注7'}
    ]}
  ];

  //var jsonStr= fs.readFileSync('./db_data/t_dept.json', 'utf8');
  //db_table = JSON.parse(jsonStr);
  return db_table;
};

DB_TABLE.renyuan = function () {
  basedoc.fields = [
    utils.string('员工编码'),
    utils.string('员工姓名'),
    utils.enum('性别'),
    utils.string('移动电话'),
    utils.string('电子邮件'),
    utils.ref('所属部门'),
    utils.enum('职位状态'),
    utils.ref('角色'),
    utils.string('备注'),
    utils.ref('银行帐户'),
    utils.string('所属银行'),
    utils.string('开户行'),
    utils.string('银行账户'),
    utils.string('账户名称'),
    utils.boolean('默认账户'),
    utils.enum('有效')
  ];
  basedoc.body = [
    utils.row(1, ['zhangsanf', '张三', 'male']),
    utils.row(2, ['lisif', '李四', 'female']),
  ];
};

DB_TABLE.xiangmu = function () {
  basedoc.fields = [
    utils.string('项目类别编码'),
    utils.string('项目类别名称')
  ];
  basedoc.body = [
    utils.row(1, ['263X2016083000000025', '项目类别A']),
    utils.row(2, ['263X2016083000000030', '项目类别B'])
  ];
};

DB_TABLE.feiyongxiangmu = function () {
  basedoc.fields = [
    utils.string('费用项目类别编码'),
    utils.string('费用项目类别名称')
  ];
  basedoc.body = [
    utils.row(1, ['D32016091200000022', '费用项目类别A']),
    utils.row(2, ['D32016091200000033', '费用项目类别B'])
  ];
};

function db() {
  return DB_TABLE;
}

/*
    "fields": [
      {
        "key": "string",
        "lable": "字符",
        "datatype": 0,
        "length": 40
      },
      {
        "key": "integer",
        "lable": "整型",
        "datatype": 1
      },
      {
        "key": "double",
        "lable": "数字",
        "datatype": 2,
        "length": 28,
        "digit": 8
      },
      {
        "key": "date",
        "lable": "日期",
        "datatype": 3
      },
      {
        "key": "datetime",
        "lable": "时间",
        "datatype": 8
      },
      {
        "key": "boolean",
        "lable": "布尔",
        "datatype": 4
      },
      {
        "key": "enum",
        "lable": "枚举",
        "datatype": 6,
        "data": [
          {
            "key": "male",
            "value": "男"
          },
          {
            "key": "female",
            "value": "女"
          }
        ]
      },
      {
        "key": "ref",
        "lable": "参照",
        "datatype": 5,
        "refinfo": "G001ZM0000BASEDOC0000DEPT000000000000000"
      },
      {
        "key": "text",
        "lable": "文本域",
        "datatype": 9,
        "length": 4000
      }
    ],
*/
