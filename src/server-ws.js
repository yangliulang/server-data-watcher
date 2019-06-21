export default {
  serverList1: [
    {
      name: 'Nginx',
      id: 'top',
      stats: 'success',
      list: [
        {
          name: 'ZWL',
          id: 'zwl1',
          //链接线从哪些id流过来,
          // targetParentSiblingsIds: ['ws2'],
          stats: 'success',
          list: [
            {
              name: 'WS',
              id: 'ws1',
              status: 'success',
              list: [
                {
                  name: '券商1',
                  id: 'qs1',
                  //链接线从哪些id流过来,
                  targetParentSiblingsIds: ['ws2'],
                  status: 'success'
                },
                {
                  name: '券商2',
                  id: 'qs2',
                  //链接线从哪些id流过来,
                  targetParentSiblingsIds: ['ws2'],
                  status: 'success'
                }
              ]
            }
          ]
        },
        {
          name: 'ZWL',
          id: 'zwl2',

          stats: 'success',
          list: [
            {
              name: 'WS',
              id: 'ws2',
              status: 'success',
              list: [
                {
                  name: '券商3',
                  id: 'qs3',
                  //链接线从哪些id流过来,
                  targetParentSiblingsIds: ['ws1'],
                  status: 'success'
                },
                {
                  name: '券商4',
                  id: 'qs4',
                  //链接线从哪些id流过来,
                  targetParentSiblingsIds: ['ws1'],
                  status: 'success'
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  serverList2: [
    {
      name: 'MQ',
      id: 'mq',
      //是否要默认的连接线
      hiddenLine: true,
      targetParentSiblingsIds: ['qs1', 'qs2', 'qs3', 'qs4'],
      stats: 'success'
      // list: []
    }
  ]
}
