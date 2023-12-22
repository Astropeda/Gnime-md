////////////////////////////////////////////////////////////////////////////////////////////////////////////
const { sck, sck1,Module_Exports, jsonformat, botpic, TelegraPh, RandomXP,fancytext, name, tlang, warndb, sleep,getAdmin,getBuffer, prefix,parsedJid } = require('../lib')
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
const moment = require("moment-timezone");
const Levels = require("discord-xp");
const fs = require('fs-extra')
const Jimp = require("jimp");
const sɪɢᴍᴀ_ᴍᴅ = require('../lib/plugins')



//---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "join",
            infocmd: "joins group by link",
            kingclass: "owner",
	 kingpath: __filename,
            use: 'group link',
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner);
            if (!text) return citel.reply(`*_Provide me a Group Link_*`);
            if (!text.split(" ")[0] && !text.split(" ")[0].includes("whatsapp.com")) return await citel.reply("*_Link Invalid, Please Send a valid whatsapp Group Link!_*");
            let result = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
            await Void.groupAcceptInvite(result)
                .then((res) => citel.reply("*_Group Joined_*"))
                .catch((err) => citel.reply("Error in Joining Group"));

        }
    )
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "support",
        shortcut: ["sgc"],
        infocmd: "Sends official support group link.",
        kingclass: "developer",
        use: ""
      }, async (sigma, man, text) => {
        const slog = await getBuffer(global.slogo);
        await sigma.sendMessage(man.chat, {
          'image': slog,
          'text': "┏━━「 ɢɴɪᴍᴇ ᴍᴅ 」━▣\n  ⁞❏.  ⁞❏. *_ɢʀᴏᴜᴘ ɴᴀᴍᴇ_* \n  ⁞❏.  ⁞❏. *ɢɴɪᴍᴇ ᴍᴅ-sᴜᴘᴘᴏʀᴛ* \n  ⁞❏.  ⁞❏. *_ɢʀᴏᴜᴘ ʟɪɴᴋ_* " + sgc + "\n  ⁞❏.  ⁞❏. *_ᴅᴇᴠᴇʟᴏᴘᴇʀ_* ᴀꜱᴛʀᴏᴘᴇᴅᴀ\n┗━━━━━━━━━━▣",
          'contextInfo': {
            'externalAdReply': {
              'title': "ɢɴɪᴍᴇ ᴍᴅ-sᴜᴘᴘᴏʀᴛ",
              'body': "Easy to Use",
              'thumbnail': slog,
              'mediaType': 0x4,
              'mediaUrl': '',
              'sourceUrl': sgc
            }
          }
        });
      });
//===========================================================================
Module_Exports({
    kingcmd: "gdesc",
    shortcut : ['setgdesc','setdesc'],
    infocmd: "Set Description of Group",
    kingclass: "group",
    kingpath: __filename,
    use: 'enter Description Text',
},
async(Void, citel, text,{ isCreator }) => {
    if (!citel.isGroup) return citel.reply(tlang().group);
    if(!text) return await citel.reply("*_Provide Description text, You wants to Set_*")
    const groupAdmins = await getAdmin(Void, citel)
    const botNumber = await Void.decodeJid(Void.user.id)
    const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    if (!isBotAdmins) return await citel.reply(tlang().botAdmin); 
    if (!isAdmins) return citel.reply(tlang().admin);
    
    try {
        await Void.groupUpdateDescription(citel.chat, text);
        citel.reply('*_Group description Updated Successfuly!_*') 
        return await Void.sendMessage(citel.chat, { react: { text: '', key: citel.key }});
    } catch(e) { return await Void.sendMessage(users , {text :"Error While Updating Group Description\nReason : " + e, } ,{quoted : citel})   }
}
)
//---------------------------------------------------------------------------
Module_Exports({
    kingcmd: "gname",
    shortcut : ['setgname','setname'],
    infocmd: "Set name of Group",
    kingclass: "group",
    kingpath: __filename,
    use: 'enter Description Text',
},
async(Void, citel, text,{ isCreator }) => {
    if (!citel.isGroup) return citel.reply(tlang().group);
    if(!text) return await citel.reply("*_Provide Text To Update Group Name_*")
    const groupAdmins = await getAdmin(Void, citel)
    const botNumber = await Void.decodeJid(Void.user.id)
    const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    if (!isBotAdmins) return await citel.reply(tlang().botAdmin); 
    if (!isAdmins) return citel.reply(tlang().admin);
    
    try {
        await Void.groupUpdateSubject(citel.chat, text)
        citel.reply('*_Group Name Updated Successfuly!_*') 
        return await Void.sendMessage(citel.chat, { react: { text: '', key: citel.key }});
    } catch(e) { return await Void.sendMessage(users , {text :"_Error While Updating Group Name_\nReason : " + e, } ,{quoted : citel})   }
}
)
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "antifake",
        shortcut: ["afake"],
        infocmd: "Allow  to Join Group For Specific Country Code",
        kingclass: "group",
        kingpath: __filename
      }, async (Void, citel, text, {
        isCreator
      }) => {
        (function (_0x3289e8, _0x35a484) {
          const _0x4c3533 = _0x3289e8();
          while (true) {
            try {
              const _0x57c2cd = -parseInt(_0x4d30(0x15f)) / 0x1 + -parseInt(_0x4d30(0x154)) / 0x2 * (-parseInt(_0x4d30(0x15a)) / 0x3) + -parseInt(_0x4d30(0x163)) / 0x4 * (parseInt(_0x4d30(0x145)) / 0x5) + -parseInt(_0x4d30(0x143)) / 0x6 * (-parseInt(_0x4d30(0x14c)) / 0x7) + -parseInt(_0x4d30(0x149)) / 0x8 + -parseInt(_0x4d30(0x142)) / 0x9 + parseInt(_0x4d30(0x14f)) / 0xa;
              if (_0x57c2cd === _0x35a484) {
                break;
              } else {
                _0x4c3533.push(_0x4c3533.shift());
              }
            } catch (_0x3b6134) {
              _0x4c3533.push(_0x4c3533.shift());
            }
          }
        })(_0x4e47, 0x29ecc);
        if (!citel.isGroup) {
          return citel.reply(tlang().group);
        }
        const groupAdmins = await getAdmin(Void, citel);
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        if (!isAdmins && !isCreator) {
          return citel.reply(tlang().admin);
        }
        function _0x4d30(_0x518d0a, _0x4df86b) {
          const _0x4e47ac = _0x4e47();
          _0x4d30 = function (_0x4d308, _0x5dbaea) {
            _0x4d308 = _0x4d308 - 0x13e;
            let _0x3f5c8a = _0x4e47ac[_0x4d308];
            return _0x3f5c8a;
          };
          return _0x4d30(_0x518d0a, _0x4df86b);
        }
        let checkinfo = (await sck.findOne({
          'id': citel.chat
        })) || (await new sck({
          'id': citel.chat
        }).save());
        if (text.toLowerCase().startsWith("off") || text.toLowerCase().startsWith("deact") || text.toLowerCase().startsWith("disable")) {
          if (checkinfo.antifake == "false") {
            return await citel.send("*Anti_Fake Already Disabled In Current Chat!*");
          }
          await sck.updateOne({
            'id': citel.chat
          }, {
            'antifake': 'false'
          });
          return await citel.send("*Anti_Fake Disable Succesfully!*");
        } else {
          if (!text) {
            return await citel.send("*_Antifake " + (checkinfo.antifake === "false" ? "Not set to any" : "set to \"" + checkinfo.antifake + "\"") + _0x4d30(0x160));
          }
        }
        function _0x4e47() {
          const _0x1417c1 = ['sender', '1119OfZcoi', 'toLowerCase', "antifake 92_*", 'antifake', 'send', '95149nQhOqw', `\x20Country\x20Code!_*\x0a\x20*Provide\x20Country\x20code\x20to\x20Update\x20Antifake\x20Status*\x0a*Ex:\x20_${prefix}antifake\x2092_*`, 'startsWith', 'chat', '4OBMwaq', "*Anti_Fake Succesfully set to \"", 'catch', 'participants', 'findOne', '803394fyIvKZ', '1356612CgXDOm', 'disable', '319485kWURrN', 'reply', "*Anti_Fake Already Disabled In Current Chat!*", 'includes', '2030144kUUVSD', 'isGroup', 'save', '7OpPQtf', "*_Please provide a country code First_*\n *_Only numbers to join this group._*\n*_eg: ", 'updateOne', '4462100VzFSpa', "set to \"", 'groupMetadata', 'off', 'split', '8ZBiSLh', 'false', "Not set to any", "\"!*\n*_Now People Joined Group Who's Number Start With ", 'deact'];
          _0x4e47 = function () {
            return _0x1417c1;
          };
          return _0x4e47();
        }
        let country_code = text ? parseInt(text.split(" ")[0x0]) : false;
        if (!text || !country_code || isNaN(country_code) || country_code === 0x0) {
          return await citel.send("*_Please provide a country code First_*\n *_Only numbers to join this group._*\n*_eg: " + prefix + "antifake 92_*");
        } else {
          if (country_code) {
            await sck.updateOne({
              'id': citel.chat
            }, {
              'antifake': '' + country_code
            });
            return await citel.send("*Anti_Fake Succesfully set to \"" + country_code + "\"!*\n*_Now People Joined Group Who's Number Start With " + country_code + '_*');
          } else {
            return await citel.send("*_Please provide a Valid country code First_*\n *_Only numbers to join this group._*\n*_Ex: " + prefix + "antifake 92_*");
          }
        }
      });

//---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "antidemote",
        shortcut: ["antidm"],
        infocmd: "Detects Promote and Automaticaly demote promoted person.", 
        kingclass: "group",
        kingpath: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
        const participants = citel.isGroup ? await groupMetadata.participants : "";
        const groupAdmins = await getAdmin(Void, citel)
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        if (!isAdmins && !isCreator) return citel.reply(tlang().admin);
            
      let checkinfo = await sck.findOne({ id : citel.chat })  || await new sck({ id: citel.chat}).save();
      if (text.toLowerCase().startsWith("on") || text.toLowerCase().startsWith("act") || text.toLowerCase().startsWith("enable") ) {
        if (checkinfo.antidemote == 'true') return await citel.send("*_Anti_Demote Already Enabled In Current Chat!_*")
        await sck.updateOne({ id: citel.chat }, { antidemote : 'true' });
        return await citel.send("*_Anti_Demote Enable Succesfully!_ _No One Demote Here Now_.*")
      }else if (text.toLowerCase().startsWith("off") || text.toLowerCase().startsWith("deact") || text.toLowerCase().startsWith("disable") ) {
        if (checkinfo.antidemote == 'false') return await citel.send("*_Anti_Demote Already Disabled In Current Chat!_*")
        await sck.updateOne({ id: citel.chat }, { antidemote : 'false' });
        return await citel.send("*_Anti_Demote Disable Succesfully!_*")
      }
      else return await citel.reply(`*_Please Toggle between "On" And "Off"._*\n*_To Enable & Disable Demoting Peoples!_*`)
});
    //---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "antipromote",
        shortcut: ["antipm"],
        infocmd: "Detects Promote and Automaticaly demote promoted person.", 
        kingclass: "group",
        kingpath: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
        const participants = citel.isGroup ? await groupMetadata.participants : "";
        const groupAdmins = await getAdmin(Void, citel)
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        if (!isAdmins && !isCreator) return citel.reply(tlang().admin);
            
      let checkinfo = await sck.findOne({ id : citel.chat })  || await new sck({ id: citel.chat}).save();
      if (text.toLowerCase().startsWith("on") || text.toLowerCase().startsWith("act") || text.toLowerCase().startsWith("enable") ) {
        if (checkinfo.antipromote == 'true') return await citel.send("*_Anti_Promote Already Enabled In Current Chat!_*")
        await sck.updateOne({ id: citel.chat }, { antipromote : 'true' });
        return await citel.send("*_Anti_Promote Enable Succesfully!_ _No One Promote Here Now_.*")
      }else if (text.toLowerCase().startsWith("off") || text.toLowerCase().startsWith("deact") || text.toLowerCase().startsWith("disable") ) {
        if (checkinfo.antipromote == 'false') return await citel.send("*_Anti_Promote Already Disabled In Current Chat!_*")
        await sck.updateOne({ id: citel.chat }, { antipromote : 'false' });
        return await citel.send("*_Anti_Promote Disable Succesfully!_*")
      }
      else return await citel.reply(`*_Please Toggle between "On" And "Off"._*\n*_To Stop Promoting Peoples in Chat_*`)
});
    //---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "pdm",
        infocmd: "Detect Promote/Demote Users And Send Alerts in Chat ",
        kingclass: "group",
        kingpath: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
        const participants = citel.isGroup ? await groupMetadata.participants : "";
        const groupAdmins = await getAdmin(Void, citel)
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        if (!isAdmins && !isCreator) return citel.reply(tlang().admin);
            
      let checkinfo = await sck.findOne({ id : citel.chat })  || await new sck({ id: citel.chat}).save();
      if (text.toLowerCase().startsWith("on") || text.toLowerCase().startsWith("act") || text.toLowerCase().startsWith("enable") ) {
        if (checkinfo.pdm == 'true') return await citel.send("*_Promote/Demote Alerts Already Enabled In Current Chat!_*")
        await sck.updateOne({ id: citel.chat }, { pdm : 'true' });
        return await citel.send("*_Promote/Demote Alerts Enable Succesfully!_*")
      }else if (text.toLowerCase().startsWith("off") || text.toLowerCase().startsWith("deact") || text.toLowerCase().startsWith("disable") ) {
        if (checkinfo.pdm == 'false') return await citel.send("*_Promote/Demote Alerts Already Disabled In Current Chat!_*")
        await sck.updateOne({ id: citel.chat }, { pdm : 'false' });
        return await citel.send("*_Promote/Demote Alerts Disable Succesfully!_*")
      }
      else return await citel.reply(`*_Please Toggle between "On" And "Off"._*\n*_To get And Stop Promote/Demote Alerts_*`)
});
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "warn",
        infocmd: "Warns user in Group.",
        kingclass: "group",
        kingpath: __filename,
        use: 'quote|reply|number'
      }, async (Void, citel, text, {
        isCreator
      }) => {
        if (!citel.isGroup) {
          return citel.reply(tlang().group);
        }
        const groupAdmins = await getAdmin(Void, citel);
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        if (!isAdmins) {
          return citel.reply(tlang().admin);
        }
        if (!citel.quoted) {
          return citel.reply("*_Please Reply a User_*");
        }
        const timesam = moment(moment()).format("HH:mm:ss");
        moment.tz.setDefault("Africa/Lagos").locale('id');
        try {
          let metadata = await Void.groupMetadata(citel.chat);
          await new warndb({
            'id': citel.quoted.sender.split('@')[0x0] + "warn",
            'reason': text,
            'group': metadata.subject,
            'warnedby': citel.pushName,
            'date': timesam
          }).save();
          Void.sendMessage(citel.chat, {
            'text': "-★-▣-♕- *ᴡᴀʀɴ* -♕-▣-★-\n*ᴜꜱᴇʀ* @" + citel.quoted.sender.split('@')[0x0] + "\n*ʀᴇᴀꜱᴏɴ* " + text + "\n*ᴡᴀʀɴᴇᴅ ʙʏ* " + citel.pushName,
            'mentions': [citel.quoted.sender]
          }, {
            'quoted': citel
          });
          let h = await warndb.find({
            'id': citel.quoted.sender.split('@')[0x0] + "warn"
          });
          const name = require("../Setting");
          if (h.length > name.warncount) {
            teskd = "*_Removing User because Warn limit exceeded_*\n\n*_Total Warnings._*\n";
            let h = await warndb.find({
              'id': citel.quoted.sender.split('@')[0x0] + "warn"
            });
            teskd += "*_There are total " + h.length + "  warnings._*\n";
            for (let i = 0x0; i < h.length; i++) {
              teskd += '*' + (i + 0x1) + "*\n┏━━「 ɢɴɪᴍᴇ ᴍᴅ 」━▣\n  ⁞❏. *_𝙸𝙽 𝙶𝚁𝙾𝚄𝙿_* " + h[i].group + "\n";
              teskd += "  ⁞❏. *ᴛɪᴍᴇ* " + h[i].date + "\n";
              teskd += "  ⁞❏. *ᴡᴀʀɴᴇᴅ ʙʏ* " + h[i].warnedby + "\n";
              teskd += "  ⁞❏. *ʀᴇᴀꜱᴏɴ* " + h[i].reason + "\n  ⁞❏. *ᴅᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ* *ᴀꜱᴛʀᴏᴘᴇᴅᴀ*\n┗━━━━━━━━━━▣\n\n";
            }
            citel.reply(teskd);
            await Void.groupParticipantsUpdate(citel.chat, [citel.quoted.sender], "remove");
          }
        } catch (Y) {
          console.log(Y);
        }
      });
    
//---------------------------------------------------------------------------
Module_Exports({
    kingcmd: "common",
    infocmd: "Get common participants in two groups, and kick using .common kick, jid",
    kingclass: "owner",
    kingpath: __filename
  }, async (Void, citel, text, {
    isCreator
  }) => {
    (function (_0x26f08a, _0x14609e) {
      var _0x1aec32 = _0x26f08a();
      while (true) {
        try {
          var _0x14857e = -parseInt(_0xd64c(0xcb)) / 0x1 + -parseInt(_0xd64c(0xcf)) / 0x2 + parseInt(_0xd64c(0xe7)) / 0x3 * (parseInt(_0xd64c(0xdb)) / 0x4) + -parseInt(_0xd64c(0xe4)) / 0x5 + -parseInt(_0xd64c(0xd0)) / 0x6 + parseInt(_0xd64c(0xd2)) / 0x7 + parseInt(_0xd64c(0xda)) / 0x8 * (parseInt(_0xd64c(0xdf)) / 0x9);
          if (_0x14857e === _0x14609e) {
            break;
          } else {
            _0x1aec32.push(_0x1aec32.shift());
          }
        } catch (_0x311bff) {
          _0x1aec32.push(_0x1aec32.shift());
        }
      }
    })(_0x4a96, 0xef9b1);
    let jids = await parsedJid(text);
    var group1;
    var group2;
    if (jids.length > 0x1) {
      group1 = jids[0x0].includes("@g.us") ? jids[0x0] : citel.chat;
      group2 = jids[0x1].includes("@g.us") ? jids[0x1] : citel.chat;
    } else {
      if (jids.length == 0x1) {
        group1 = citel.chat;
        group2 = jids[0x0].includes('@g.us') ? jids[0x0] : citel.chat;
      } else {
        return await citel.send(_0xd64c(0xdc));
      }
    }
    if (group2 === group1) {
      return await citel.send("Please Provide Valid Group Jid");
    }
    var g1 = await Void.groupMetadata(group1);
    var g2 = await Void.groupMetadata(group2);
    var common = g1.participants.filter(({
      id: _0x215617
    }) => g2.participants.some(({
      id: _0xa9d3a3
    }) => _0xa9d3a3 === _0x215617)) || [];
    if (common.length == 0x0) {
      return await citel.send("Theres no Common Users in Both Groups");
    }
    let kick = !!(text.split(',')[0x0].trim() === "kick");
    let reason = false;
    var heading = "   *List Of Common Participants*";
    if (kick) {
      let chat = {
        'chat': group1
      };
      heading = "  *Kicking Common Participants*";
      const groupAdmins = (await getAdmin(Void, chat)) || [];
      var botNumber = await Void.decodeJid(Void.user.id);
      var isBotAdmins = groupAdmins.includes(botNumber) || false;
      var isAdmins = groupAdmins.includes(citel.sender) || false;
      if (!isBotAdmins || !isAdmins) {
        kick = false;
        heading = "  *乂 Can't Kick Common Participants*";
      }
      if (!isBotAdmins) {
        reason = "*❒ Reason:* _I Can't Kick Common Participants Without Getting Admin Role,So Provide Admin Role First,_\n";
      }
      if (!isAdmins) {
        reason = "*❒ Reason:* _Only Group Admin Can Kick Common Users Through This Command_\n";
      }
    }
    function _0xd64c(_0x32c6f8, _0x2d697c) {
      var _0x4a96f3 = _0x4a96();
      _0xd64c = function (_0xd64cbf, _0x5aabfa) {
        _0xd64cbf = _0xd64cbf - 0xc9;
        var _0x256505 = _0x4a96f3[_0xd64cbf];
        return _0x256505;
      };
      return _0xd64c(_0x32c6f8, _0x2d697c);
    }
    function _0x4a96() {
      var _0x375d41 = ['sender', 'push', "Please Provide Valid Group Jid", 'kick', '7605210eeYGmA', '923184474176@s.whatsapp.net', "  *乂 Can't Kick Common Participants*", '138543ZVCNcn', 'participants', 'split', '@s.whatsapp.net', "\n*❒ Group2:* ", "   *List Of Common Participants*", 'user', 'length', 'caption', 'includes', '946278jKrKhT', "_Members_\n\n\n", "\n*❒ Group1:* ", 'trim', '1283014cwDqub', '6253704DutAwi', 'send', '12524057XHlruT', 'some', "\n\n\n©", '@g.us', '923004591719@s.whatsapp.net', "  *⬡* @", "   \n", 'groupParticipantsUpdate', '3132728ehxlpC', '120EgDLWk', `*_Please\x20Provide\x20a\x20Group\x20Jid,_*\x0a*To\x20Get\x20common\x20participants\x20in\x20two\x20groups,*\x0a*Also\x20kick\x20using\x20${prefix}common\x20kick,\x20jid*`, 'chat', "Error removing participants:", '45UpvHCU'];
      _0x4a96 = function () {
        return _0x375d41;
      };
      return _0x4a96();
    }
    var msg = " " + heading + "   \n" + (reason ? reason : '') + "\n*❒ Group1:* " + g1.subject + "\n*❒ Group2:* " + g2.subject + "\n*❒ Common Counts:* _" + common.length + "_Members_\n\n\n";
    var commons = [];
    common.map(async _0x5484ff => {
      msg += "  *⬡* @" + _0x5484ff.id.split('@')[0x0] + "\n";
      commons.push(_0x5484ff.id.split('@')[0x0] + "@s.whatsapp.net");
    });
    await citel.send(msg + ("\n\n\n©" + name.caption), {
      'mentions': commons
    });
    if (kick && !reason) {
      try {
        var botNumber = await Void.decodeJid(Void.user.id);
        for (const user of commons) {
          if (botNumber === user || user === "923004591719@s.whatsapp.net" || user === "923184474176@s.whatsapp.net") {
            continue;
          }
          await new Promise(_0x5d963f => setTimeout(_0x5d963f, 0x3e8));
          await Void.groupParticipantsUpdate(group1, [user], 'remove');
        }
      } catch (_0x5636c1) {
        console.error("Error removing participants:", _0x5636c1);
      }
    }
    return;
  });
  //---------------------------------------------------------------------------
  Module_Exports({
    kingcmd: "diff",
    infocmd: "Get difference of participants in two groups",
    kingclass: "owner",
    kingpath: __filename
  }, async (Void, citel, text, {
    isCreator
  }) => {
    let jids = await parsedJid(text);
    var group1;
    var group2;
    if (jids.length > 0x1) {
      group1 = jids[0x0].includes('@g.us') ? jids[0x0] : citel.chat;
      group2 = jids[0x1].includes('@g.us') ? jids[0x1] : citel.chat;
    } else {
      if (jids.length == 0x1) {
        group1 = citel.chat;
        group2 = jids[0x0].includes("@g.us") ? jids[0x0] : citel.chat;
      } else {
        return await citel.send("*_Please Provide a Group Jid_*\n*_To Get Different participants with in group_*");
      }
    }
    if (group2 === group1) {
      return await citel.send("Please Provide Valid Group Jid");
    }
    var g1 = await Void.groupMetadata(group1);
    var g2 = await Void.groupMetadata(group2);
    var diff = g1.participants.filter(({
      id: _0x240eaa
    }) => !g2.participants.some(({
      id: _0x5fe1e0
    }) => _0x5fe1e0 === _0x240eaa)) || [];
    if (diff.length == 0x0) {
      return await citel.send("Theres no Different Users in Both Groups");
    }
    var msg = "  *乂 List Of Different Participants* \n\n*❒ Group1:* " + g1.subject + "\n*❒ Group2:* " + g2.subject + "\n*❒ Differ Counts:* _" + diff.length + "_Members_\n\n\n";
    var diffs = [];
    diff.map(async _0x299f43 => {
      msg += "  *⬡* @" + _0x299f43.id.split('@')[0x0] + "\n";
      diffs.push(_0x299f43.id.split('@')[0x0] + "@s.whatsapp.net");
    });
    return await citel.send(msg + ("\n\n\n©" + name.caption), {
      'mentions': diffs
    });
  });
//---------------------------------------------------------------------------
     Module_Exports({
         kingcmd: "block",
         infocmd: "blocks that person",
         kingclass: "owner",
         kingpath: __filename,
         use: 'quote/reply user.'
     },
     async(bot, man, text,{isCreator}) => {
         if (!isCreator) man.reply(tlang().owner);
         let users = man.quoted ? man.quoted.sender : man.mentionedJid[0] ? man.mentionedJid[0] : "";
         if(!users)  return await send.reply("*_Reply/Mention a User_*")
         let num = users.replace("@s.whatsapp.net","")
         await bot.updateBlockStatus(users, "block")
         .then((res) => man.reply(`*@${num} _blocked Successfully.._!*`,{mentions : [ users , ]}))		    //console.log(jsonformat(res))
             .catch((err) => console.log(jsonformat(err)));
 
     }
 )
//---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "unblock",
            infocmd: "Unblocked to the quoted user.",
            kingclass: "owner",
            kingpath: __filename,

        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) citel.reply(tlang().owner);
            let users = citel.quoted ? citel.quoted.sender : citel.mentionedJid[0] ? citel.mentionedJid[0] : false ;
            if(!users)  return await citel.reply("*_Rreply/mention an User_*")
	    let num = users.replace("@s.whatsapp.net","")
            await Void.updateBlockStatus(users, "unblock")
                .then((res) => citel.send(`*@${num} _Unblocked Succesfully..!_*`,{mentions : [ users , ]}))
                .catch((err) => console.log(jsonformat(err)));
        }
    )
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "invite",
        shortcut:["glink"],
        infocmd: "get group link.",
        kingclass: "group",
        kingpath: __filename,
    },
	 async(Void, citel, text,{ isCreator }) => {
	    if (!citel.isGroup) return citel.reply(tlang().group);
	    
        const groupAdmins = await getAdmin(Void, citel)	
	    const botNumber = await Void.decodeJid(Void.user.id)
        const isBotAdmins =groupAdmins.includes(botNumber)
	
if (!isBotAdmins) return citel.reply(tlang().admin);
var str1 = await Void.groupInviteCode(citel.chat)
var str2 ="https://chat.whatsapp.com/"
var mergedString = `${str2}${str1}`;
return citel.reply("*_Group Invite Link Is Here_* \n*_"+mergedString+"_*");
	
    }
	)
	
  //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "revoke",
        infocmd: "reset group link.",
        kingclass: "group",
        kingpath: __filename,
    },
	 async(Void, citel, text,{ isCreator }) => {
	    if (!citel.isGroup) return citel.reply(tlang().group);
	    
        const groupAdmins = await getAdmin(Void, citel)	
	const botNumber = await Void.decodeJid(Void.user.id)
        const isBotAdmins =groupAdmins.includes(botNumber)
	if (!isBotAdmins) return citel.reply(tlang().admin);
	    
var code = await Void.groupRevokeInvite(citel.chat)
return citel.reply("*_Group Link Revoked SuccesFully_*");
	
    }
	)
    //---------------------------------------------------------------------------
         //---------------------------------------------------------------------------
         Module_Exports({
            kingcmd: "onlyadmin",
            shortcut: ["antimessge", "oadmin"],
            infocmd: "Only Admins Allow to Send Message, Others kick.",
            kingclass: "group",
            kingpath: __filename
          }, async (Void, citel, text, {
            cmdName,
            isCreator
          }) => {
            if (!citel.isGroup) {
              return citel.reply(tlang().group);
            }
            const groupAdmins = await getAdmin(Void, citel);
            const botNumber = await Void.decodeJid(Void.user.id);
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            if (!isAdmins && !isCreator) {
              return citel.reply(tlang().admin);
            }
            let checkinfo = (await sck.findOne({
              'id': citel.chat
            })) || (await new sck({
              'id': citel.chat
            }).save());
            let textt = text ? text.toLowerCase().trim() : false;
            let action = textt ? textt.split(" ")[0x0] : false;
            if (!action) {
              return await citel.send('*_' + cmdName + " " + (checkinfo.onlyadmin === 'false' ? "Disabled" : 'Enabled') + " in this Group!_*\n *_Use: " + (prefix + cmdName) + " on/off_*");
            } else {
              if (action.startsWith("off") || action.startsWith("deact") || action.startsWith('disable')) {
                if (checkinfo.onlyadmin === "false") {
                  return await citel.reply("*_Onlyadmin Already Disabled in Current Chat_*");
                }
                await sck.updateOne({
                  'id': citel.chat
                }, {
                  'onlyadmin': "false"
                });
                return await citel.send('*' + cmdName + " Succesfully Disable in group!_*\n*_Now everyone Send Message in Group_*");
              } else {
                if (action.startsWith('on') || action.startsWith("act") || action.startsWith("enable")) {
                  if (checkinfo.onlyadmin === "true") {
                    return await citel.reply("*_Onlyadmin Already Enabled in Current Chat_*");
                  }
                  if (isBotAdmins) {
                    await sck.updateOne({
                      'id': citel.chat
                    }, {
                      'onlyadmin': "true"
                    });
                    await Void.groupSettingUpdate(citel.chat, "announcement");
                    return await citel.send('*' + cmdName + " Succesfully set to kick message senders!_*\n*_Now Only Admins Allow to Send Message in Group_*");
                  } else {
                    return await citel.reply("*_Please, Provide Admin Role First_*");
                  }
                } else {
                  return await citel.reply("*_Please Provide Valid Instruction_*\n*Ex: _" + (prefix + cmdName) + " on/off_*");
                }
              }
            }
          });
    
    
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "devwarn",
        shortcut: ['dwarn'],
        infocmd: "sends warning from developer",
        kingclass: "developer",
        use: 'reply to any person',
    },
    async(sigma, person, memo,{isCreator}) => {
        if (!isCreator) return person.reply(tlang().owner)
        if (!person.isGroup) return person.reply(tlang().group);
        if (!person.quoted) return person.reply(`Please reply to a Person`);
        var bio = await sigma.fetchStatus(person.quoted.sender);
        var bioo = bio.status;
        var setAt = bio.setAt.toString();
        
        var words = setAt.split(" ");
        if(words.length > 3){ setAt= words.slice(0, 5).join(' ') ; }
         
        var num = person.quoted.sender.split('@')[0];
        let pfp;
         
    
        try  {  pfp = await sigma.profilePictureUrl(person.quoted.sender, "image"); } 
        catch (e) { pfp = await sigma.profilePictureUrl(person.sender, "image") ||  'https://telegra.ph/file/29a8c892a1d18fdb26028.jpg' ; }    //|| 'https://telegra.ph/file/29a8c892a1d18fdb26028.jpg' ;  }
        
        let username = await sck1.findOne({ id: person.quoted.sender });
        var tname = username.name;
    
    let Maher = `     
┏━━「 ɢɴɪᴍᴇ ᴍᴅ 」━▣  
  ⁞❏.  ⁞❏. *ᴅᴇᴠᴇʟᴏᴘᴇʀ's ᴡᴀʀɴɪɴɢ*
  ⁞❏.  ⁞❏. *ɴᴀᴍᴇ* ${tname}
  ⁞❏.  ⁞❏. *ɴᴜᴍ* ${num}
  ⁞❏.  ⁞❏.   *ᴋᴇᴇᴘ ᴄᴀʟᴍ ᴅᴜᴅᴇ*
  ⁞❏.  ⁞❏. *ᴅᴏɴ'ᴛ ᴀʙᴜsᴇ*
  ⁞❏.  ⁞❏. *ᴅᴏɴ'ᴛ sᴘᴀᴍ*
  ⁞❏.  ⁞❏. *ᴅᴏɴ'ᴛ ᴜsᴇ ʙᴏᴛ*
  ⁞❏.  ⁞❏. *ᴅᴏɴ'ᴛ sᴇɴᴅ ʟɪɴᴋs*
  ⁞❏.  ⁞❏. *ᴏᴛʜᴇʀ ᴡɪsᴇ*
  ⁞❏.  ⁞❏. *ʏᴏᴜ ᴡɪʟʟ*
  ⁞❏.  ⁞❏. *ʙᴇ ᴋɪᴄᴋᴇᴅ*
┗━━━━━━━━━━▣      `
    
    
    let king = {
        image: { url: pfp},
        caption: Maher,
        footer: tlang().footer,
        headerType: 4,
        contextInfo: {
            externalAdReply: {
                title: `${name.ownername}`,
                body: ``,
                thumbnail: log0,
                mediaType: 4,
                mediaUrl: '',
                sourceUrl: `${waUrl}`,}}}
       
    return await sigma.sendMessage(person.chat, king, {   quoted: person, });
    }
    )
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "antibot",
        infocmd: "kick Bot Users from Group!",
        kingclass: "group",
        kingpath: __filename
      }, async (Void, citel, text, {
        cmdName,
        isCreator
      }) => {
        if (!citel.isGroup) {
          return citel.reply(tlang().group);
        }
        const groupAdmins = await getAdmin(Void, citel);
        const botNumber = await Void.decodeJid(Void.user.id);
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
        if (!isAdmins && !isCreator) {
          return citel.reply(tlang().admin);
        }
        let checkinfo = (await sck.findOne({
          'id': citel.chat
        })) || (await new sck({
          'id': citel.chat
        }).save());
        let textt = text ? text.toLowerCase().trim() : false;
        let action = textt ? textt.split(" ")[0x0] : false;
        if (!action) {
          return await citel.send("*_Antibot Currently " + (checkinfo.antibot === "false" ? "Disabled" : "Enabled") + " in this Group!_*\n *Use: _" + (prefix + cmdName) + " on/off_*");
        } else {
          if (action.startsWith("off") || action.startsWith("deact") || action.startsWith("disable")) {
            if (checkinfo.antibot === "false") {
              return await citel.reply("*_Antibot Already Disabled Here_*");
            }
            await sck.updateOne({
              'id': citel.chat
            }, {
              'antibot': "false"
            });
            return await citel.send("*_Antibot Succesfully Disable in group!_*");
          } else {
            if (action.startsWith('on') || action.startsWith("act") || action.startsWith("enable")) {
              if (checkinfo.antibot === 'true') {
                return await citel.reply("*_Antibot Already Enabled Here_*");
              }
              if (isBotAdmins) {
                await sck.updateOne({
                  'id': citel.chat
                }, {
                  'antibot': 'true'
                });
                return await citel.send("*_Antibot Succesfully set to kick Bot Users!_*");
              } else {
                return await citel.reply("*_Provide Admin Role First_*");
              }
            } else {
              return await citel.reply("*_Please Provide Valid Instruction_*\n*Ex: _" + (prefix + cmdName) + " on/off_*");
            }
          }
        }
      });
    //---------------------------------------------------------------------------
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "disable",
        infocmd: "disable cmds in Group.!",
        kingclass: "group",
        kingpath: __filename
      }, async (Void, citel, text, {
        isCreator
      }) => {
        if (!citel.isGroup) {
          return citel.send(tlang().group);
        }
        const groupAdmins = await getAdmin(Void, citel);
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        if (!isAdmins && !isCreator) {
          return citel.reply(tlang().admin);
        }
        let checkinfo = (await sck.findOne({
          'id': citel.chat
        })) || (await new sck({
          'id': citel.chat
        }).save());
        let textt = text ? text.toLowerCase().trim() : false;
        let cmdName = textt ? textt.split(" ")[0x0] : '';
        if (!cmdName) {
          return await citel.send("*Provide cmd name to disable in group*\n*Ex " + prefix + "disable tag(to disabled 'tag' cmd)/info*");
        } else {
          if (cmdName.startsWith("info") || cmdName.startsWith("list") || cmdName.startsWith("cmds")) {
            return await citel.send(checkinfo.disablecmds === "false" ? "*_Theres no cmd disabled in current group_*" : "*_Disable cmds :_* ```" + checkinfo.disablecmds.replace('false,', '') + '```');
          } else {
            if (cmdName.startsWith("enable") || cmdName.startsWith("disable")) {
              return await citel.reply("*_Uhh Dear, I can't disable that cmd_*");
            } else {
              if (cmdName) {
                const cmds = sɪɢᴍᴀ_ᴍᴅ.commands.find(_0x3d1011 => _0x3d1011.kingcmd === cmdName) || sɪɢᴍᴀ - ᴍᴅ.commands.find(_0x2cf945 => _0x2cf945.shortcut && _0x2cf945.shortcut.includes(cmdName));
                if (cmds) {
                  let newCmd = cmds.kingcmd.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                  let regex = new RegExp("\\b" + newCmd + "\\b");
                  if (regex.test(checkinfo.disablecmds)) {
                    return await citel.send("*_Provided cmd already in disable cmds_*");
                  }
                  var newDisable_Cmd = checkinfo.disablecmds + ',' + cmds.kingcmd;
                  await sck.updateOne({
                    'id': citel.chat
                  }, {
                    'disablecmds': newDisable_Cmd
                  });
                  let lists = newDisable_Cmd.replace("false,", '');
                  return await citel.send("*_\"" + cmdName + "\" Succesfully added in Disable cmds_*" + (lists === '' ? '' : "\n*_Disable cmds :_* ```" + lists + "```"));
                } else {
                  return await citel.reply("*_'" + cmdName + "' is not a bot cmd, Provide valid cmd_*");
                }
              }
            }
          }
        }
      });
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "enable",
        infocmd: "enable a Command in Group.!",
        kingclass: "group",
        kingpath: __filename
      }, async (Void, citel, text, {
        isCreator
      }) => {
        if (!citel.isGroup) {
          return citel.send(tlang().group);
        }
        const groupAdmins = await getAdmin(Void, citel);
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        if (!isAdmins && !isCreator) {
          return citel.reply(tlang().admin);
        }
        let checkinfo = (await sck.findOne({
          'id': citel.chat
        })) || (await new sck({
          'id': citel.chat
        }).save());
        let textt = text ? text.toLowerCase().trim() : false;
        let cmdName = textt ? ',' + textt.split(" ")[0x0] : '';
        let ReplaceCmd = cmdName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        let regex = new RegExp("\\b" + ReplaceCmd + "\\b");
        if (!cmdName || cmdName === '') {
          return await citel.send("*Please provide disabled cmd name to enable it*\n*Ex " + prefix + "enable tag(if 'tag' cmd disabled)/all(reset disables)*");
        } else {
          if (cmdName.startsWith("all")) {
            await sck.updateOne({
              'id': citel.chat
            }, {
              'disablecmds': "false"
            });
            return await citel.send("*_All disable cmds Succesfully Enabled_*");
          } else {
            if (regex.test(checkinfo.disablecmds) && checkinfo.disablecmds.includes(cmdName)) {
              let newCmds = checkinfo.disablecmds.replace(regex, '');
              await sck.updateOne({
                'id': citel.chat
              }, {
                'disablecmds': newCmds
              });
              return await citel.send("*_\"" + cmdName.replace(',', '') + "\" Succesfully removed from Disable cmds_*");
            } else {
              return await citel.send("_There's no cmd Disabled with *" + cmdName.replace(',', '') + "* name_");
            }
          }
        }
      });
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "jid",
        infocmd: "get jid of replied user in a group.",
        kingclass: "owner",
        kingpath: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
      if (citel.quoted)  return citel.reply(citel.quoted.sender)
	    
	    
	  /*  if(!isCreator) return citel.reply(tlang().owner)
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
		const participants = citel.isGroup ? await groupMetadata.participants : "";
    let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `📍 ${mem.id}\n`;
        }*/
     else return citel.reply(citel.chat)

    }
)

    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "tagall",
        infocmd: "Tags all user in group.",
        kingclass: "group",
        kingpath: __filename,
    },
    async(bot, man, text,{ isCreator }) => {
        if (!man.isGroup) return man.reply(tlang().group);
        const groupMetadata = man.isGroup ? await bot.groupMetadata(man.chat).catch((e) => {}) : "";
        const participants = man.isGroup ? await groupMetadata.participants : "";
        const groupAdmins = await getAdmin(bot, man)
        const isAdmins = man.isGroup ? groupAdmins.includes(man.sender) : false;
        if (!isAdmins) return man.reply(tlang().admin);

        let sigma = `
┏━━「 ${mztit} 」━▣
  ⁞❏.  ⁞❏. *ᴍᴇꜱꜱᴀɢᴇ* ${text ? text : ""}
  ⁞❏.  ⁞❏. *_${fancytext("TAGGED BY" ,35)}_* ${name.ownername}
`
        for (let mem of participants) {
            sigma += `  ⁞❏.  ⁞❏. @${mem.id.split("@")[0]}\n┗━━━━━━━━━━▣
`;
        }
        let Maher = {
            text: sigma,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: `${Gname}`,
                    body: "Easy to Use",
                    thumbnail: log0,
                    mediaType: 4,
                    mediaUrl: '',
                    sourceUrl: `${waUrl}`,}}};
        bot.sendMessage(man.chat, Maher,{mentions: participants.map((a) => a.id), }, {
            quoted: man,
        });
    }
)

    //---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "kik",
        infocmd: "Kick all numbers from a certain country",
        kingclass: "group",
        kingpath: __filename,
    },
    async(Void, citel, text,{ isCreator }) => 
    {	
        if (!citel.isGroup) return citel.reply(tlang().group);
	if(!text) return await citel.reply(`*_Provide Me Country Code. Ex: ${prefix}kik 91_*`)
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
	const groupAdmins = await getAdmin(Void, citel)
        let isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) :  false  ;
        if (!isAdmins)
	{
		if(isCreator) citel.reply(tlang().admin)
		else return citel.reply(tlang().admin);
	}
	let find = text.split(" ")[0].replace('+' , '');
	let error = '*_These Users Not Kicked_*\n\t' ;
	let users = await groupMetadata.participants
	let hmanykik = 0;
	let iskikstart = false ;
	const botNumber = await Void.decodeJid(Void.user.id)
	for (let i of users) { 
		let isuseradmin  =  groupAdmins.includes(i.id) || false 
		if(i.id.startsWith(find) && !isuseradmin)
		{ 
			if(!iskikstart)
			{
				iskikstart = true ;
				await citel.reply(`*_Kicking ALL the Users With ${find} Country Code_*`)
			}
			try { await Void.groupParticipantsUpdate(citel.chat, [i.id], "remove"); hmanykik++ ;  }
			catch (e) { console.log("Error While Kicking : " , e) } 	
		}
	}
	if(hmanykik == 0) return await citel.reply(`*_There Is No User Found With ${find} Country Code_*`)
        else return await citel.reply(`*_Hurray, ${hmanykik.toString()} Users With ${find} Country Code kicked SuccessFully_*`)
})
//---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "num",
        infocmd: "get all numbers from a certain country",
        kingclass: "group",
        kingpath: __filename,
    },
    async(Void, citel, text,{ isCreator }) => 
    {	
        if (!citel.isGroup) return citel.reply(tlang().group);
	if(!text) return await citel.reply(`*_Provide Me Country Code. Ex: ${prefix}num 92_*`)
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
	const groupAdmins = await getAdmin(Void, citel)
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) :  false  ;
        if (!isAdmins && !isCreator ) return citel.reply(tlang().admin);
	let find = text.split(" ")[0];
	let users = await groupMetadata.participants
	let nums = `*_List Of Users With ${find} Country Code_*\n`
	let num = '';
	for (let i of users) {  if(i.id.startsWith(find)) num += i.id.split("@")[0] +"\n";   }
	if(!num) {nums =`*_There Is No Users With ${find} Country Code_*` }
	else { nums += num }
	await citel.reply(nums)		
})
//---------------------------------------------------------------------------
Module_Exports({
    kingcmd: "request",
    infocmd: "Sends requst to main Bot developer.",
    kingclass: "developer",
    use: 'add new feature',
},
async(bot, person, text,{isCreator}) => {
    if (!isCreator) return person.reply(tlang().admin)
    if (!text) return person.reply(`*_Example : ${prefix}request hello dev please add a downloader feature_*`);
    textt = `*ɢɴɪᴍᴇ ᴍᴅ* *_ʀᴇQᴜᴇꜱᴛ ᴄᴇɴᴛᴇʀ*`;
    teks1 = `\n\n*ᴜꜱᴇʀ* : @${
person.sender.split("@")[0]
}\n*ʀᴇQᴜᴇꜱᴛ* : ${text}`;
    teks2 = `\n\n*_Hello_*, ${person.pushName}.*_We have received your message and we would get back to you_*.`;
    for (let i of owner) {
        bot.sendMessage(i + "2348039607375@s.whatsapp.net", {
            text: textt + teks1,
            mentions: [person.sender],
        }, {
            quoted: person,
        });
    }
    bot.sendMessage(person.chat, {
        text: textt + teks2,
        mentions: [person.sender],
    }, {
        quoted: person,
    });

}
)
    //---------------------------------------------------------------------------

    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "delwarn",
        infocmd: "Deletes 1 previously given warns of quoted user.",
        kingclass: "group",
        kingpath: __filename,
        use: '',
    },
    async(bot, man, text,{isCreator}) => {
        if (!isCreator) return man.reply(tlang().owner)
        if (!man.quoted) return man.reply('*_Reply/Mention a User_*')
        await warndb.deleteOne({ id: man.quoted.sender.split('@')[0] + 'warn' });
        return man.reply('*_Removed 1 Previous warn of this User_*')
    }
)
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "poll",
            infocmd: "Makes poll in group.",
            kingclass: "group",
            kingpath: __filename,
            use: `question;option1,option2,option3.....`,
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            let [poll, opt] = text.split(";");
            if (text.split(";") < 2) return await citel.reply(`${prefix}poll question;option1,option2,option3.....`);
            let options = [];
            for (let i of opt.split(',')) {  options.push(i);  }
            await Void.sendMessage(citel.chat, { poll: { name: poll,  values: options } })
        }
    )
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "profile",
            infocmd: "Shows profile of user.",
            kingclass: "group",
            kingpath: __filename,
        },
        async(Void, citel, text) => {
            var bio = await Void.fetchStatus(citel.sender);
            var bioo = bio.status;
            let meh = citel.sender;
            const userq = await Levels.fetch(citel.sender, "RandomXP");
            const lvpoints = userq.level;
            var role = "GOD";
             if (lvpoints <=  2) { var role = "Citizen"; } 
	else if (lvpoints <=  4) { var role = "Baby Wizard"; } 
	else if (lvpoints <=  6) { var role = "Wizard";  } 
	else if (lvpoints <=  8) { var role = "Wizard Lord"; }
	else if (lvpoints <= 10) { var role = "Baby Mage";  } 
	else if (lvpoints <= 12) { var role = "Mage"; } 
	else if (lvpoints <= 14) { var role = "Master of Mage";} 
	else if (lvpoints <= 16) { var role = "Child of Nobel"; } 
	else if (lvpoints <= 18) { var role = "Nobel"; }
	else if (lvpoints <= 20) { var role = "Speed of Elite"; } 
	else if (lvpoints <= 22) { var role = "Elite"; } 
	else if (lvpoints <= 24) { var role = "Ace I"; }
	else if (lvpoints <= 26) { var role = "Ace II"; } 
	else if (lvpoints <= 28) { var role = "Ace Master"; }
	else if (lvpoints <= 30) { var role = "Ace Dominator";} 
	else if (lvpoints <= 32) { var role = "Ace Elite"; }
	else if (lvpoints <= 34) { var role = "Ace Supreme";}
	else if (lvpoints <= 36) { var role = "Supreme I";}
	else if (lvpoints <= 38) { var role = "Supreme Ii";} 
	else if (lvpoints <= 40) { var role = "Supreme Master";} 
	else if (lvpoints <= 42) { var role = "Legend III";} 
	else if (lvpoints <= 44) { var role = "Legend II";} 
	else if (lvpoints <= 46) { var role = "Legend"; } 
	else if (lvpoints <= 55) { var role = "𝐊𝐈𝐍𝐆"; }
	
            let ttms = `${userq.xp}` / 8;
            const timenow = moment(moment())
                .format('HH:mm:ss')
            moment.tz.setDefault('Africa/Lagos')
                .locale('id')
	let pfp;
            try {
                pfp = await Void.profilePictureUrl(citel.sender, "image");
            } catch (e) {
                pfp = await botpic();
            }
            const profile = `
┏━━「 ${mztit} 」━▣	    
  ⁞❏.  ⁞❏. *_ᴘʀᴏғɪʟᴇ ɪɴғᴏʀᴍᴀᴛɪᴏɴ_* 
  ⁞❏.  ⁞❏. *_ᴜsᴇʀɴᴀᴍᴇ_* ${citel.pushName}
  ⁞❏.  ⁞❏. *_ʙɪᴏ_* ${bioo}
  ⁞❏.  ⁞❏. *_ʀᴏʟᴇ_* ${role}
  ⁞❏.  ⁞❏. *_ʟᴇᴠᴇʟ_* ${userq.level}
  ⁞❏.  ⁞❏. *_ᴛᴏᴛᴀʟ ᴍᴇssᴀɢᴇ_* ${ttms}
  ⁞❏.  ⁞❏. *_ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢɴɪᴍᴇ ᴍᴅ_*
┗━━━━━━━━━━▣
`;
            
            let buttonMessage = {
                image: { url: pfp },
                caption: profile,
                footer: tlang().footer,
                headerType: 4,
            };
            Void.sendMessage(citel.chat, buttonMessage, { quoted: citel });

        }
    ) 
    //---------------------------------------------------------------------------

    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "promote",
            infocmd: "Provides admin role to replied/quoted user",
            kingclass: "group",
            kingpath: __filename,
            use: 'quote|reply|number',
        },
        async(Void, citel, text ,{ isCreator }) => {	
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
	        if (!isBotAdmins) return citel.reply(tlang().admin);
            if (!isAdmins) return citel.reply(tlang().admin);
            
            try {
                let users = citel.quoted ? citel.quoted.sender : citel.mentionedJid[0] ? citel.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
                if (!users) return await citel.send("*_Reply/Mention to an User_*");
                await Void.groupParticipantsUpdate(citel.chat, [users], "promote");
                await citel.send(`*_User promoted Succesfully!_*`)
                return await Void.sendMessage(citel.chat, { react: { text: '', key: citel.key }});
            } catch(e) {
                console.log("Promote error : " , e )
                await Void.sendMessage(citel.chat, { react: { text: '', key: citel.key }});
                return await citel.reply(tlang().botAdmin);
            }
        }
    )
    //---------------------------------------------------------------------------
Module_Exports({
    kingcmd: "demote",
    infocmd: "Demotes replied/quoted user from group",
    kingclass: "group",
    kingpath: __filename,
    use: '<quote|reply|number>',
},
async(Void, citel, text,{ isCreator }) => {

    if (!citel.isGroup) return citel.reply(tlang().group);
    const groupAdmins = await getAdmin(Void, citel)
    const botNumber = await Void.decodeJid(Void.user.id)
    const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    if (!isBotAdmins) return await citel.reply(tlang().admin); 
    if (!isAdmins) return citel.reply(tlang().admin);
    
    try {
        let users = citel.quoted ? citel.quoted.sender : citel.mentionedJid[0] ? citel.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        if (!users) return await citel.send("*_Reply/Mention to an User_*");
        await Void.groupParticipantsUpdate(citel.chat, [users], "demote");
        await citel.send(`*_User demoted Succesfully!_*`)
        return await Void.sendMessage(citel.chat, { react: { text: '', key: citel.key }});
    } catch(e) {
        console.log("Demote error : " , e )
        await Void.sendMessage(citel.chat, { react: { text: '', key: citel.key }});
        return await citel.reply(tlang().botAdmin);    
    }

}
)

//---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "kick",
            infocmd: "Kicks replied/quoted user from group.",
            kingclass: "group",
            kingpath: __filename,
            use: '<quote|reply|number>',
        },
        async(Void, citel, text ,{ isCreator }) => {
	//if (!isCreator) return citel.reply("*_Only My Owner Can Use This Command_*")
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
            if (!isBotAdmins) return await citel.reply(tlang().admin);  
            if (!isAdmins) return citel.reply(tlang().admin);
            
            try {
                let users = citel.quoted ? citel.quoted.sender : citel.mentionedJid[0] ? citel.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
                if (!users) return citel.send("*_Please, Reply/Mention to an User_*");
                await Void.groupParticipantsUpdate(citel.chat, [users], "remove");
                await citel.send(`*_Hurray, One IDiot Kicked Successfully_*`)
                return await Void.sendMessage(citel.chat, { react: { text: '', key: citel.key }});
            } catch(e) {
                console.log("Kick error : " , e )
                await Void.sendMessage(citel.chat, { react: { text: '', key: citel.key }});
                return await citel.reply(tlang().botAdmin);

            }
        }
    )
    //---------------------------------------------------------------------------
 Module_Exports({
             kingcmd: "group",
             shortcut: ["gmode"],
             infocmd: "mute and unmute group.",
             kingclass: "group",
             kingpath: __filename,
         },
         async(bot, man, text) => {
             //if (!man.isGroup) return man.reply(tlang().group);
             const groupAdmins = await getAdmin(bot, man)
             const botNumber = await bot.decodeJid(bot.user.id)
             const isBotAdmins = man.isGroup ? groupAdmins.includes(botNumber) : false;
             const isAdmins = man.isGroup ? groupAdmins.includes(man.sender) : false;
             //if (!man.isGroup) return man.reply(tlang().group);
             if (!isBotAdmins) return man.reply(tlang().botAdmin);
             if (!isAdmins) return man.reply(tlang().admin);
             let Group = await sck.findOne({ id: man.chat });
             if (text.split(" ")[0] == "close" || text.split(" ")[0] == "mute" ) {
                 await bot.groupSettingUpdate(man.chat, "announcement")
                     .then((res) => man.reply(`*_ɢʀᴏᴜᴘ ᴄʜᴀᴛ ᴍᴜᴛᴇᴅ_*`))
                     .catch((err) => man.reply("Error :" +err));
             } else if (text.split(" ")[0] === "open"||text.split(" ")[0] === "unmute") {
                 await bot.groupSettingUpdate(man.chat, "not_announcement")
                     .then((res) => man.reply(`*_ɢʀᴏᴜᴘ ᴄʜᴀᴛ ᴜɴ-ᴍᴜᴛᴇᴅ_*`))
                     .catch((err) => man.reply("Error : " +err));
             } 
 else if(text=="Detail" || text=="Info" || text=="info" || text=="details" ) 
 {
     const pp = await bot.profilePictureUrl(man.chat, 'image').catch(_ => null) || ''
     const groupAdmins = participants.filter(p => p.admin)
     const listAdmin = groupAdmins.map((v, i) => `  ${i + 1}. wa.me/${v.id.split('@')[0]}`).join('\n')
     const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || man.chat.split`-`[0] + '@s.whatsapp.net'
 
     let ginfos = `
       *「 INFO GROUP 」*
 *▢ ID :*
     ${groupMetadata.id}
 *▢ NAME :* 
     ${groupMetadata.subject}
 *▢ Members :*
     ${participants.length}
 *▢ Group Owner :*
     wa.me/${owner.split('@')[0]}
 *▢ Admins :*
 ${listAdmin}
 *▢ Description :*
     ${groupMetadata.infocmd?.toString() || 'unknown'}
 *▢ 🪢 Extra Group Configuration :*";
    Group Nsfw :    ${Group.nsfw=='true'? '✅' : '❎'} 
    Antilink        :    ${Group.antilink=='true'? '✅' : '❎'}
    Economy      :    ${Group.economy=='true'? '✅' : '❎'}
    Events         :     ${Group.events=='true'? '✅' : '❎'}
 `.trim()
     if(Group.events=='true'){
         ginfos +="\n*▢ Wellcome bot :* \n   "+Group.welcome;
         ginfos +="\n\n*▢ Goodbye bot :* \n   "+Group.goodbye; 
     }
 return await bot.sendMessage(man.chat,{image:{url : pp} , caption: ginfos } , {quoted:man })
 }
 else
 { 
     return await man.reply(`*_Give me Text from Below Options_*
 1: ${prefix}gmode mute
 2: ${prefix}gmode unmute

 `)
       //let buttons = [{ buttonId: `${prefix}group open`, buttonText: { displayText: "📍Unmute",},type: 1,},{buttonId: `${prefix}group close`,buttonText: {displayText: "📍Mute",},type: 1, },];     await bot.sendButtonText(man.chat,buttons,`Group Mode`, bot.user.name, man);
            
 }
         }
     )
    //---------------------------------------------------------------------------

    //---------------------------------------------------------------------------
     
    Module_Exports({
        kingcmd: "fullgpp",
        shortcut: ['fgp'],
        infocmd: "Sets full  pic in Group..",
        kingclass: "group"
      }, async (bot, man, memo) => {
        if (!man.isGroup) {
          return await man.reply(tlang().group);
        }
        if (!man.quoted) {
          return await man.reply("*_Reply Any Image To Set full Group Icon_*");
        }
        if (man.quoted.mtype != 'imageMessage') {
          return await man.reply("*_Reply To An Image, Idiot_*");
        }
        const groupAdmins = await getAdmin(bot, man);
        const botNumber = await bot.decodeJid(bot.user.id);
        const isBotAdmins = groupAdmins.includes(botNumber) || false;
        const isAdmins = groupAdmins.includes(man.sender) || false;
        if (!isBotAdmins) {
          return await man.reply("*_I'm Not Admin In This Chat,_*\n*_Provide Admin Role To Update Group Icon_*");
        }
        if (!isAdmins) {
          return await man.reply(tlang().admin);
        }
        const media = await man.quoted.download();
        try {
          const {
            query
          } = bot;
          const {
            preview
          } = await generateProfilePicture(media);
          await query({
            'tag': 'iq',
            'attrs': {
              'to': man.chat,
              'type': "set",
              'xmlns': 'w:profile:picture'
            },
            'content': [{
              'tag': "picture",
              'attrs': {
                'type': 'image'
              },
              'content': preview
            }]
          });
          return await man.reply("*_Full Group Icon Updated Successfully_*");
        } catch (_0x632d01) {
          return await man.reply("```Error While Updating full Group Profile :``` " + _0x632d01);
        }
        async function generateProfilePicture(_0x3da926) {
          const _0x462396 = await Jimp.read(_0x3da926);
          const _0x1c1f73 = _0x462396.getWidth();
          const _0x176031 = _0x462396.getHeight();
          const _0x887df7 = _0x462396.crop(0x0, 0x0, _0x1c1f73, _0x176031);
          return {
            'img': await _0x887df7.scaleToFit(0x144, 0x2d0).getBufferAsync(Jimp.MIME_JPEG),
            'preview': await _0x887df7.normalize().getBufferAsync(Jimp.MIME_JPEG)
          };
        }
      });
         //---------------------------------------------------------------------------
         Module_Exports({
            kingcmd: "grouppic",
            shortcut:["gpp"],
            infocmd: "Sets a profile pic in Group..",
            kingclass: "group",
    
        },
        async(bot, man, write) => {
            if (!man.isGroup) return man.reply(tlang().group);
            const groupAdmins = await getAdmin(bot, man)
            const botNumber = await bot.decodeJid(bot.user.id)
            const isBotAdmins = man.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = man.isGroup ? groupAdmins.includes(man.sender) : false;
    
    
            let mime = man.quoted.mtype
            if (!man.isGroup) man.reply(tlang().group);
            if (!isAdmins) man.reply(tlang().admin);
            if (!isBotAdmins) man.reply(tlang().botadmin);
            if (!man.quoted) return man.reply(`Send/Reply Image With Caption`);
            if (!/image/.test(mime)) return man.reply(`Send/Reply Image With Caption`);
            if (/webp/.test(mime)) return man.reply(`Send/Reply Image With Caption`);
            let media = await bot.downloadAndSaveMediaMessage(man.quoted);
            await bot.updateProfilePicture(man.chat, {
                    url: media,
                })
                .catch((err) => fs.unlinkSync(media));
            man.reply("*_Group icon updated Successfully_*");
    
        }
    )
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "tag",
            shortcut:["hidetag","htag"],
            infocmd: "Tags everyperson of group without mentioning their numbers",
            kingclass: "group",
            kingpath: __filename,
            use: '<text>',
        },
        async(Void, citel, text , {isCreator}) => {
	if(!text && !citel.quoted) return citel.reply(`*Ex : ${prefix}tag Hi Everyone*` )
	    if(!text){text = citel.quoted.text;}
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
            const participants = citel.isGroup ? await groupMetadata.participants : "";
            const groupAdmins = await getAdmin(Void, citel)
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
            if (!isAdmins && !isCreator) return citel.reply(tlang().admin);
            Void.sendMessage(citel.chat, { text: text, mentions: participants.map((a) => a.id)}, { quoted: citel});
        }
    )
        //---------------------------------------------------------------------------
     //---------------------------------------------------------------------------
     Module_Exports({
        kingcmd: "tagadmin",
        infocmd: "Tags only Admin numbers",
        kingclass: "group",
        kingpath: __filename,
        use: '',
    },
    async(bot, man, text ) => {
        if (!man.isGroup) return man.reply(tlang().group);
        const groupMetadata = man.isGroup ? await bot.groupMetadata(man.chat).catch((e) => {}) : "";
        const participants = man.isGroup ? await groupMetadata.participants : "";
        const groupAdmins = participants.filter(p => p.admin)
        const isAdmins = man.isGroup ? groupAdmins.includes(man.sender) : false;
        
        
        const listAdmin = groupAdmins.map((v, i) => `  ⁞❏.  ⁞❏. @${v.id.split('@')[0]}`).join('\n')
    
    
    let tag = `┏━━「 ${mztit} 」━▣\n  ⁞❏.  ⁞❏. *ᴛᴀɢɢᴇᴅ ʙʏ* @${man.sender.split("@")[0]}
    ${text ? "≡ bot :" + text : ""}
┏━━ *ᴀᴅᴍɪɴꜱ* ━▣
${listAdmin}
┗━━━━━━━━━━▣\n*_ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢɴɪᴍᴇ ᴍᴅ_*
    `.trim()
    return await bot.sendMessage(man.chat,{text : tag ,mentions: [man.sender, ...groupAdmins.map(v => v.id) ,]} ,)
    
    
    
    }
    )
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "add",
            infocmd: "Add that person in group",
            kingclass: "group",
            kingpath: __filename,
            use: 'number',
        },
        async(Void, citel, text,{isCreator}) => {
	//if (!isCreator) return citel.reply("```Only My Owner Can Use This Command```")
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;

  
	        if (!isBotAdmins) return await citel.reply(tlang().admin);  
            if (!isAdmins) return citel.reply(tlang().admin)
            
            let users = citel.quoted ? citel.quoted.sender : citel.mentionedJid[0] ? citel.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            if (!users) return await citel.reply("*_Please Provide An User._*");
            if(citel.sender == botNumber ){
                await Void.groupParticipantsUpdate(citel.chat, [users], "add");
                await citel.send(`*_User Added Succesfully!_*`)
                return await Void.sendMessage(citel.chat, { react: { text: '', key: citel.key }});
            }else {
                await Void.sendMessage(citel.chat, { react: { text: '', key: citel.key }});
                await Void.sendMessage(users , {text : `Here's The Group Invite Link\n User @${citel.sender.split("@")[0]} *_Wants To Add You in bellow Group_*\n https://chat.whatsapp.com/${await Void.groupInviteCode(citel.chat)} _ \n*_Join If YOu Feel Free_*?` ,mentions:[citel.sender,]} , {quoted : citel })
                return await citel.reply(`_Unable To Add User, Invite Sent_`)
            }
        }
    )
    //--------------------------------------------------------------------------- 
Module_Exports({
            kingcmd: "getjids",
            shortcut:['gjid','gjids'],
            infocmd: "Sends chat id of every groups.",
            kingclass: "group",
            kingpath: __filename,
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            n = await Void.groupFetchAllParticipating();
            const c=Object.entries(n).slice(0).map(t=>t[1]);
            let a="";
            let onlyJids = false ; 
            let onlyNames = false ; 
            if(text.includes("jid")) {  onlyJids = true ; }
            else if(text.includes("name")) {  onlyNames = true ; }
            await citel.reply(`*_Fetching ${onlyJids ? "Only jids" : ( onlyNames ? "Only Names" : "Names and Jids") } from ${c.length} Groups_*`);
            await sleep(2000); 
            for(var i of c.map(t=>t.id))
            {
                a+= onlyJids ? "" : `\n*𝙶𝚁𝙾𝚄𝙿* ${n[i].subject} `;
                a+= onlyNames ? "" :`\n*𝙹𝙸𝙳* ${i}\n`;
            }
            return await citel.send(a)


	/*
	

let getGroups = await Void.groupFetchAllParticipating();
let anu = Object.values(getGroups).map(v => v.id);
let res = `All groups jid\n\n`;
await citel.reply(`Fetching jid from ${anu.length} Groups`);

await Promise.all(anu.map(async i => {
  let metadata = await Void.groupMetadata(i);
  await sleep(2000); 
 res += ` ------------- ${i} -------------\n`;
 res += `*Name :* ${metadata.subject}\n`;
 
}));
return await citel.reply(res);
	//return await Void.sendMessage(citel.chat,{text:res},{quoted:citel})
	
	//----------------------------------------------------------------------
	
	

	let getGroups = await Void.groupFetchAllParticipating();
            let groups = Object.entries(getGroups)
                .slice(0)
                .map((entry) => entry[1]);
            let anu = groups.map((v) => v.id);
            let jackhuh = `All groups jid\n\n`
            citel.reply(`Fetching jid from ${anu.length} Groups`)
            for (let i of anu) {
                let metadata = await Void.groupMetadata(i);
                await sleep(500)
                jackhuh += `*Subject:-* ${metadata.subject}\n`
               // jackhuh += `*Member :* ${metadata.participants.length}\n`
                jackhuh += `*Jid:-* ${i}\n\n`

            }
            citel.reply(jackhuh)
	    */

        }
    ) 
//---------------------------------------------------------------------------------------
Module_Exports({
            kingcmd: "del",
            shortcut: ["delete" , "dlt"],
            infocmd: "Deletes message of any user",
            kingclass: "group",
            kingpath: __filename,
            use: '<quote/reply message.>',
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!citel.isGroup && isCreator) { 
                const key = {
                    remoteJid: citel.chat,
                    fromMe: false,
                    id: citel.quoted.id,
                    participant: citel.quoted.sender
                }
                return await Void.sendMessage(citel.chat, { delete: key })
            }
            if (!citel.quoted.isBot ) {
                if (!citel.isGroup) return citel.reply(tlang().group)
                const groupAdmins = await getAdmin(Void, citel)
                const botNumber = await Void.decodeJid(Void.user.id)
                const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
                const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
                if (!isAdmins) return citel.reply(tlang().admin)
                if (!isBotAdmins) return citel.reply(tlang().admin)
                if (!citel.quoted) return citel.reply(`*_Please reply to any message._*`);
                let { chat, fromMe, id } = citel.quoted;
                
		    const key = {
                    remoteJid: citel.chat,
                    fromMe: false,
                    id: citel.quoted.id,
                    participant: citel.quoted.sender
                }
                await Void.sendMessage(citel.chat, { delete: key })
            }
        }
    )
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "checkwarn",
        infocmd: "Check warns",
        shortcut: ["cwarn"],
        kingclass: "group",
        kingpath: __filename,
        use: '<quoted/reply user.>',
    },
    async(bot, man, text, {isCreator}) => {
    if (!isCreator) return man.reply(tlang().owner)
        if (!man.isGroup) return man.reply(tlang().group)
        if (!man.quoted) return man.reply('*_Reply/Mention a User_*')
        teskd = `*_All Warnings._*\n\n`
        let h = await warndb.find({ id: man.quoted.sender.split('@')[0] + 'warn' })
        console.log(h)
        teskd += `*_There are Total ${h.length}  warnings_*\n`
        for (let i = 0; i < h.length; i++) {
            teskd += `*${i+1}*\n┏━━「 ${mztit} 」━▣\n  ⁞❏.  ⁞❏. *_𝙸𝙽 𝙶𝚁𝙾𝚄𝙿_* ${h[i].group}\n`
            teskd += `  ⁞❏.  ⁞❏. *ᴛɪᴍᴇ* ${h[i].date}\n`
            teskd += `  ⁞❏.  ⁞❏. *ᴡᴀʀɴᴇᴅ ʙʏ* ${h[i].warnedby}\n`
            teskd += `  ⁞❏.  ⁞❏. *ʀᴇᴀꜱᴏɴ* ${h[i].reason}\n┗━━━━━━━━━━▣\n`
        }
        man.reply(teskd)
    }

)
    //---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "broadcast",
        infocmd: "Bot makes a broadcast in all groups",
        kingclass: "group",
        kingpath: __filename,
        use: '<text for broadcast.>',
    },
    async(Void, citel, text,{isCreator}) => {
        if (!isCreator) return citel.reply(tlang().owner)
        if(!text) return await citel.reply(`*_Uhh Dear, Provide text to broadcast in all groups_*`)
        let getGroups = await Void.groupFetchAllParticipating();
        let groups = Object.entries(getGroups)
            .slice(0)
            .map((entry) => entry[1]);
        let anu = groups.map((v) => v.id);
        citel.send(`*_Send Broadcast To ${anu.length} Group Chat, Finish Time ${ anu.length * 1.5} second_*`);
        for (let i of anu) {
            await sleep(1500);
            let txt = `*--❗${tlang().title} Broadcast❗--*\n\n *🍀Author:* ${citel.pushName}\n\n${text}`;
            let buttonMessaged = {
                image: log0,
                caption: txt,
                footer: citel.pushName,
                headerType: 1,
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: false,
                    externalAdReply: {
                        title: 'Broadcast by ' + citel.pushName,
                        body: tlang().title,
                        thumbnail: log0,
                        mediaUrl: '',
                        mediaType: 2,
                        sourceUrl: gurl,
                        showAdAttribution: true,
                    },
                },
            };
            await Void.sendMessage(i, buttonMessaged, { quoted: citel,});
        }
        return await citel.reply(`*Successful Sending Broadcast To ${anu.length} Group(s)*`);
    }
)

//---------------------------------------------------------------------------

    ////////////////////////////



    ///////////////////////////////////