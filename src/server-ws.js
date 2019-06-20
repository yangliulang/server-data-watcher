export default {
  server1: [
    {
      name: '服务器集群1',
      stats: 'success',
      list: [
        {
          name: '服务器集群1-1',
          status: 'error',
          list: [
            {
              name: '服务器集群1-1-1',
              status: 'success'
            },
            {
              name: '服务器集群1-1-1',
              status: 'success',
              list: [
                {
                  name: '服务器集群1-1-1',
                  status: 'success'
                },
                {
                  name: '服务器集群1-1-1',
                  status: 'success'
                },
                {
                  name: '服务器集群1-1-1',
                  status: 'success'
                },

                {
                  name: '服务器集群1-1-1',
                  status: 'success'
                }
              ]
            }
          ]
        },
        {
          name: '服务器集群1-2',
          status: 'success',
          list: [
            {
              name: '服务器集群1-2',
              status: 'success'
            }
          ]
        },

        {
          name: '服务器集群1-2',
          status: 'success'
        },
        {
          name: '服务器集群1-2',
          status: 'success'
        },
        {
          name: '服务器集群1-2',
          status: 'success',
          list: [
            {
              name: '服务器集群1-2',
              status: 'success'
            }
          ]
        }
      ]
    }
  ]
}
