/**
 * Client Settings
 * @param { Client } client 
 */

 module.exports = (client) => {

    //General Settings
    client.settings = {

        "Prefix": ".",//prefix
        "Token": "",//bot tokeni
        "Owners": [],//bot kurucusu id
        "VoiceChannel": "",//botun gireceği ses kanal id
        "Activity": "WATCHING",//watching yaptık istiyorsanız PLAYING LİSTENİNG yapabilirsiniz
        "Status": "dnd",//online/idle/dnd/offline
        "MongoURL": "",//mongodb url'niz
        "Footer": "Anarchy",//bot footeri
        "DisableCooldownsForAdmins": true,//elleme

    };

    //Activity Messages
    client.statusMessages = [

        "Anarchy",//1. durum
        "Created By Anarchy",//2. durum
        "Only Anarchy"//3. durum - botun hep durum değişmesini istemiyorsanız hepsini aynı yapın

    ];
//emojiler kısmını elleme
    //Emojis
    client.systemEmojis = [

        ///System
        { emojiName: 'developer', emojiUrl: 'https://cdn.discordapp.com/emojis/853642013332865035.gif?v=1' },
        { emojiName: 'loading', emojiUrl: 'https://cdn.discordapp.com/emojis/857935194203226118.gif?v=1' },
        { emojiName: 'crown', emojiUrl: 'https://cdn.discordapp.com/emojis/876942324909871114.gif?v=1' },
        { emojiName: 'crown2', emojiUrl: 'https://cdn.discordapp.com/emojis/876929331572662323.gif?v=1' },
        { emojiName: 'mark', emojiUrl: 'https://cdn.discordapp.com/emojis/876153262796079115.gif?v=1' },
        { emojiName: 'cross', emojiUrl: 'https://cdn.discordapp.com/emojis/876153078863253514.gif?v=1' },
        { emojiName: 'success', emojiUrl: 'https://cdn.discordapp.com/emojis/793774156067373066.gif?v=1' }

    ];

    //Guild Settings     
    client.guildSettings = {

        ///General
        guildID: "",//sunucu id
        guildTags: [], //sunucu tagı
        guildDiscriminator: "",//sunucunun etiket tagı (yoksa boş bırak)
        guildRulesChannel: "",//kurallar kanal id
        entryExitChannel: "",//giren çıkan log kanal id
        guildChat: "",//chat kanal id
        tagLog: "",//tag log kanal id
        botYt: "",//bir rol oluşturun sunucunuzdaki tüm botlara verin ve o rolün id sini buraya yapıştırın
        unAuthorizedMessages: true,//elleme

        //Registration
        registration: {

            staffs: [],//kayıt yetkili rol id
            familyRole: "",//tag alanlara verilecek rol id
            requireTag: false,//taglı alımdaysanız false yerine true yapın
            penalBlockLimit: 10,//elleme
            penalPointBlockLimit: 150,//elleme
            unifying: " | ",//isim yaş arasına koyulacak işaret
            nameTag: "tag",//isim tagınız
            maxAge: 50,//maksimum yaş
            minAge: 10,//minimum yaş
            limit: 15,//kayıt limiti
            log: "",//kayıt log

            //Man
            man: {
                manRole: "",//erkek rol id
                otherManRoles: [],//diğer erkek rol id
            },
            
            //Woman
            woman: {
                womanRole: "",//kadın rol id
                otherWomanRoles: [],//diğer kadın rol id
            },

            //Vip
            vip: {
                vipRole: "",//vip rol id
                onlyAdmins: true,//false yaparsanız kayıt yetkilileri de vip verebilecek (sunucunuzun güvenli bir ortam olması için true kalsın)
                dailyVipLimit: 5,//günlük verilecek vip sayısı
            },

        },
        
        //Unregister
        unregister: {
            unregisterChannel: "",//sunucuya biri girince botun mesaj atacağı kanal id 
            unregisterRole: "",//kayıtsız id
            unregisterName: "İsim | Yaş",//sunucuya biri girince otomatik yapılacak isim
            dailyUnregisterLimit: 10,//günlük kayıtsıza atma sayısı
        },

        //Quarantine
        quarantine: {
            quarantineRole: "",//şüpheli hesap rol id
            quarantineName: "Şüpheli Hesap",//şüpheli hesaplara verilecek isim
            quarantineLog: "",//şüpheli hesap log
            quarantineDateLimit: 604800000,//elleme sikersin
        },

    };

};
