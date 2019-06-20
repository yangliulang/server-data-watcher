export default {
  server1: [
    {
      name: '服务器集群1',
      stats: 'success',
      list: [
        {
          name: '服务器集群1-7',
          status: 'error'
        },
        {
          name: '服务器集群1-1',
          status: 'error',
          list: [
            {
              name: '服务器集群1-1-1',
              status: 'success'
            },
            {
              name: '服务器集群1-1-2',
              status: 'success',
              list: [
                {
                  name: '服务器集群1-1-2-1',
                  status: 'success'
                },
                {
                  name: '服务器集群1-1-2-2',
                  status: 'success'
                },
                {
                  name: '服务器集群1-1-2-3',
                  status: 'success'
                },

                {
                  name: '服务器集群1-1-2-4',
                  status: 'success'
                }
              ]
            },
            {
              name: '服务器集群1-1-3',
              status: 'success'
            }
          ]
        },
        {
          name: '服务器集群1-2',
          status: 'success',
          list: [
            {
              name: '服务器集群1-2-1',
              status: 'success'
            }
          ]
        },

        {
          name: '服务器集群1-3',
          status: 'success'
        },
        {
          name: '服务器集群1-4',
          status: 'success'
        },
        {
          name: '服务器集群1-5',
          status: 'success',
          list: [
            {
              name: '服务器集群1-5-1',
              status: 'success'
            }
          ]
        },
        {
          name: '服务器集群1-6',
          status: 'success'
        }
      ]
    }
  ]
}
