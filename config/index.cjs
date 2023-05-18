/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxd40af4dfc15d0ca7',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '6e3ae073a91f59b47a7ae1ed4879ae53',

  PROVINCE: '安徽',
  CITY: '合肥',
  
  openUrl: 'https://www.toutiao.com',

  USERS: [
    {
      // 想要发送的人的名字
      name: '管管',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'op0Rn61gzlra8c-Pa0QkpQHaayfA',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'ooUUMY-e8xGuctoEgV6gzVkGlx_ckaaShWZsw2MYW8Y',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '07-17',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '乖乖阴历', year: '1997', date: '07-17',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '乖乖阳历', year: '1997', date: '08-19',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '05-14',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-08-09' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-05-14' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'V1oqUTcUf3txXXsWAfRu_BJnPK4rN_9AKOVD4hq34hM',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'op0Rn69YXmIX82E0l3BBjyh8_SF0',
    }
  ],

}

module.exports = USER_CONFIG

