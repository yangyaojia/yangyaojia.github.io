!
function(e) {
    function t(a) {
        if (i[a]) return i[a].exports;
        var o = i[a] = {
            exports: {},
            id: a,
            loaded: !1
        };
        return e[a].call(o.exports, o, o.exports, t),
        o.loaded = !0,
        o.exports
    }
    var i = {};
    return t.m = e,
    t.c = i,
    t.p = "../",
    t(0)
} ([function(e, exports, t) {
    t(1),
    t(5),
    t(6)
},
function(e, exports) {},
, , ,

function(e, exports) {
    $(function() {
        var e = {
            $videoList: $(".play-list"),
            $nameInput: $(".name-input", this.$alertWrap),
            $phoneInput: $(".phone-input", this.$alertWrap),
            $zipCodeInput: $(".zipCode-input", this.$alertWrap),
            $province: $("#province", this.$alertWrap),
            $btnLottery: $(".btn-lottery"),
            dialog: function() {
                function e(e) {
                    return Math.floor(Math.random() * e)
                }
                for (var t, i, a = $(".click-chest-22,.click-ass-22"), o = $(".click-other-22"), n = $(".talk-22"), s = $(".talk-22-text"), r = $(".left-22-img"), c = $(".click-chest-33,.click-ass-33"), l = $(".click-other-33"), d = $(".talk-33"), u = $(".talk-33-text"), p = $(".right-33-img"), h = !1, m = !1, f = "https://yangyaojia.github.io/img/2233/", g = [{
                    type: "\u6b63\u5e38",
                    img: "22_set_01.png",
                    text: "\u9e21\u7965\u5982\u610f\uff01\u0669(\u02ca\u15dc\u02cb*)\u0648",
                    state: "short"
                },
                {
                    type: "\u5403\u60ca",
                    img: "22_set_02.png",
                    text: "\u4eca\u5e74\u53ef\u4ee5\u5728B\u7ad9\u62a2\u7ea2\u5305\u54e6\uff01"
                },
                {
                    type: "\u9ad8\u5174",
                    img: "22_set_04.png",
                    text: "\u65b0\u5e74\u65b0\u6c14\u8c61\uff01<(\u25b0\u02d8\u25e1\u02d8\u25b0)>"
                },
                {
                    type: "\u9ad8\u5174",
                    img: "22_set_04.png",
                    text: "\u8fc7\u5e74\u597d\uff01\u613f\u4f60\u5fc3\u60f3\u4e8b\u6210\uff01(/\u2267\u25bd\u2266)/"
                },
                {
                    type: "\u9ad8\u5174",
                    img: "22_set_04.png",
                    text: "\u53fd~",
                    state: "short"
                },
                {
                    type: "\u5403\u60ca",
                    img: "22_set_02.png",
                    text: "\u542c\u8bf4\u6211\u4eec\u6709\u51fa\u624b\u529e\u8bf6~(\u2299\u25a1\u2299)"
                },
                {
                    type: "\u9ad8\u5174",
                    img: "22_set_04.png",
                    text: "\u611f\u8c22UP\u4e3b\u4eec\u7684\u70ed\u60c5\u53c2\u4e0e\uff01 (\u25cf'\u25e1'\u25cf)\uff89"
                },
                {
                    type: "\u6b63\u5e38",
                    img: "22_set_01.png",
                    text: "\u53bb\u54d4\u54e9\u54d4\u54e9\u661f\u7403\u73a9\u4e86\u5417\uff1f"
                },
                {
                    type: "\u9ad8\u5174",
                    img: "22_set_04.png",
                    text: "\u9e21\u5e74\u7eb3\u798f\uff01\u53fd\uff01>\u3142<",
                    state: "short"
                },
                {
                    type: "\u6b63\u5e38",
                    img: "22_set_01.png",
                    text: "\u5145\u7535\u90a3\u91cc\u53ef\u4ee5\u67e5\u770b\u8282\u76ee\u5355\u548cup\u4e3b\u4ecb\u7ecd~"
                },
                {
                    type: "\u5403\u60ca",
                    img: "22_set_02.png",
                    text: "\u89c6\u9891\u7a97\u4e0a\u53ef\u9009\u5206P\u54e6",
                    state: "short"
                }], v = [{
                    type: "\u5bb3\u7f9e",
                    img: "22_set_03.png",
                    text: "\u4f60\u4f60\u4f60\u4f60\uff01\u70b9\u54ea\u91cc\uff01",
                    state: "short"
                },
                {
                    type: "\u5bb3\u7f9e",
                    img: "22_set_03.png",
                    text: "\u597d\u597d\u770b\u62dc\u5e74\u796d\uff01",
                    state: "short"
                },
                {
                    type: "\u5bb3\u7f9e",
                    img: "22_set_03.png",
                    text: "2017\u5e74\u4e5f\u8bf7\u591a\u591a\u6307\u6559\u5566(*/\u03c9\uff3c*)"
                }], w = 0, _ = [{
                    type: "\u6b63\u5e38",
                    img: "33_set_01.png",
                    text: "\u9e21\u5e74\u5927\u5409~",
                    state: "short"
                },
                {
                    type: "\u5403\u60ca",
                    img: "33_set_02.png",
                    text: "\u4e3a\u4ec0\u4e48\u70b9\u6211\uff1f",
                    state: "short"
                },
                {
                    type: "\u751f\u6c14",
                    img: "33_set_04.png",
                    text: "\u4e0d\u8981\u70b9\u6211\uff01",
                    state: "short"
                },
                {
                    type: "\u5403\u60ca",
                    img: "33_set_02.png",
                    text: "\u53fd\uff1f",
                    state: "short"
                },
                {
                    type: "\u6b63\u5e38",
                    img: "33_set_01.png",
                    text: "\u65b0\u5e74\u5148\u5b9a\u4e00\u4e2a\u5c0f\u76ee\u6807!",
                    state: "short"
                },
                {
                    type: "\u6b63\u5e38",
                    img: "33_set_01.png",
                    text: "\u9e21\u5e74\u884c\u5927\u8fd0!",
                    state: "short"
                },
                {
                    type: "\u751f\u6c14",
                    img: "33_set_04.png",
                    text: "\u76ef\u2014\u2014",
                    state: "short"
                },
                {
                    type: "\u5403\u60ca",
                    img: "33_set_02.png",
                    text: "\u62ff\u5230\u7ea2\u5305\u4e86\u5417\uff1f",
                    state: "short"
                },
                {
                    type: "\u6b63\u5e38",
                    img: "33_set_01.png",
                    text: "( \u309c- \u309c)\u3064\u30ed \u4e7e\u676f~",
                    state: "short"
                },
                {
                    type: "\u6b63\u5e38",
                    img: "33_set_01.png",
                    text: "\u4e00\u8fb9\u5403\u4e1c\u897f\u4e00\u8fb9\u770b\u62dc\u5e74\u796d\u4f1a\u80d6_(:\u2467\u300d\u2220)"
                }], b = [{
                    type: "\u5bb3\u7f9e",
                    img: "33_set_03.png",
                    text: "\u522b...\u522b\u70b9",
                    state: "short"
                },
                {
                    type: "\u5bb3\u7f9e",
                    img: "33_set_03.png",
                    text: "\u606d\u559c\u53d1\u8d22\uff01\u7ea2\u5305\u62ff\u6765\uff01",
                    state: "short"
                },
                {
                    type: "\u5bb3\u7f9e",
                    img: "33_set_03.png",
                    text: "\u597d\u997f\u54e6~",
                    state: "short"
                },
                {
                    type: "\u5bb3\u7f9e",
                    img: "33_set_03.png",
                    text: "33\u52bf\u529b\u767b\u573a~",
                    state: "short"
                }], y = 0, x = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", C = $(".dialog-img"), j = 2; 6 > j; j++) i = '<img src="' + f + "22_set_0" + j + '.png" ><img src="' + f + "33_set_0" + j + '.png" >',
                C.append(i);
                
                if ("Microsoft Internet Explorer" == navigator.appName) {
                    var k = navigator.userAgent,
                    T = new RegExp("MSIE ([0-9]{1,}[/.0-9]{0,})"),
                    I = -1;
                    null != T.exec(k) && (I = parseInt(RegExp.$1)),
                    t = 11 > I ?
                    function(t, i, a, o, n, s, r, c) {
                        var l, d = e(t),
                        u = f + i[d].img,
                        p = i[d].text;
                        if ("22" == a ? (w++, l = w) : (y++, l = y), o.fadeIn("fast",
                        function() {
                            if ("22" == a) {
                                if (!h) {
                                    h = !0;
                                    var e = setTimeout(function() {
                                        o.fadeOut("fast"),
                                        h = !1,
                                        clearTimeout(e)
                                    },
                                    1500)
                                }
                            } else if ("33" == a && !m) {
                                m = !0;
                                var t = setTimeout(function() {
                                    o.fadeOut("fast"),
                                    m = !1,
                                    clearTimeout(t)
                                },
                                1500)
                            }
                        }), "short" == i[d].state ? o.addClass("text-center") : o.removeClass("text-center"), l >= 50) {
                            o.removeClass("text-center"),
                            n.css("background-image", "url(" + r + ")"),
                            s.html(c);
                            var g = setTimeout(function() {
                                "22" == a ? (w = 0, n.css("background-image", "url(" + f + "22_set_01.png)")) : (y = 0, n.css("background-image", "url(" + f + "22_set_01.png)")),
                                clearTimeout(g)
                            },
                            3e3)
                        } else n.css("background-image", "url(" + u + ")"),
                        s.html(p)
                    }: function(t, i, a, o, n, s, r, c) {
                        var l, d = e(t),
                        u = f + i[d].img,
                        p = i[d].text;
                        if ("22" == a ? (w++, l = w) : (y++, l = y), o.addClass("animate-show-dialog").one(x,
                        function() {
                            o.removeClass("animate-show-dialog")
                        }), "short" == i[d].state ? o.addClass("text-center") : o.removeClass("text-center"), l >= 50) {
                            o.removeClass("text-center"),
                            n.css("background-image", "url(" + r + ")"),
                            s.html(c);
                            var h = setTimeout(function() {
                                "22" == a ? (w = 0, n.css("background-image", "url(" + f + "22_set_01.png)")) : (y = 0, n.css("background-image", "url(" + f + "33_set_01.png)")),
                                clearTimeout(h)
                            },
                            3e3)
                        } else l >= 20 && n.addClass("animate-dialog-scale").one(x,
                        function() {
                            n.removeClass("animate-dialog-scale")
                        }),
                        n.css("background-image", "url(" + u + ")"),
                        s.html(p)
                    }
                } else t = function(t, i, a, o, n, s, r, c) {
                    var l, d = e(t),
                    u = f + i[d].img,
                    p = i[d].text;
                    if ("22" == a ? (w++, l = w) : (y++, l = y), o.addClass("animate-show-dialog").one(x,
                    function() {
                        o.removeClass("animate-show-dialog")
                    }), "short" == i[d].state ? o.addClass("text-center") : o.removeClass("text-center"), l >= 50) {
                        o.removeClass("text-center"),
                        n.css("background-image", "url(" + r + ")"),
                        s.html(c);
                        var h = setTimeout(function() {
                            "22" == a ? (w = 0, n.css("background-image", "url(" + f + "22_set_01.png)")) : (y = 0, n.css("background-image", "url(" + f + "33_set_01.png)")),
                            clearTimeout(h)
                        },
                        3e3)
                    } else l >= 20 && n.addClass("animate-dialog-scale").one(x,
                    function() {
                        n.removeClass("animate-dialog-scale")
                    }),
                    n.css("background-image", "url(" + u + ")"),
                    s.html(p)
                };
                return a.on("click",
                function() {
                    w++,
                    t(3, v, "22", n, r, s, f + "22_set_05.png", "33\uff0c33\uff0c\u89c2\u4f17\u8001\u7237\u8fd8\u5728\u4e71\u70b9\uff01")
                }),
                o.on("click",
                function() {
                    w++,
                    t(11, g, "22", n, r, s, f + "22_set_05.png", "33\uff0c33\uff0c\u89c2\u4f17\u8001\u7237\u8fd8\u5728\u4e71\u70b9\uff01")
                }),
                c.on("click",
                function() {
                    y++,
                    t(4, b, "33", d, p, u, f + "33_set_05.png", "\u59d0\u59d0\uff0c\u59d0\u59d0\uff0c\u89c2\u4f17\u8001\u7237\u4e0d\u597d\u597d\u770b\u62dc\u5e74\u796d!")
                }),
                l.on("click",
                function() {
                    y++,
                    t(10, _, "33", d, p, u, f + "33_set_05.png", "\u59d0\u59d0\uff0c\u59d0\u59d0\uff0c\u89c2\u4f17\u8001\u7237\u4e0d\u597d\u597d\u770b\u62dc\u5e74\u796d!")
                }),
                this
            },
            getVideoCid: function() {
                var e = this;
                return $.ajax({
                    url: "",
                    type: "GET",
                    headers: {
                        "Cache-Control": "no-cache",
                        Pragma: "no-cache",
                        Expires: "-1"
                    },
                    data: {
                        jsonp: "jsonp"
                    },
                    dataType: "jsonp",
                    async: !1,
                    cache: !0,
                    success: function(t) {
                        if ("[object Object]" === Object.prototype.toString.call(t)) if (0 === t.code) {
                            var i = t.data.pages || [],
                            a = i.length || 0,
                            o = $(".play-box");
                            if (window.aid = e.AID = t.data.aid || "", a >= 7) o.show(),
                            e.videoID_1 = i[0].cid,
                            e.videoID_2 = i[1].cid,
                            e.videoID_3 = [i[2].cid, i[3].cid, i[4].cid, i[5].cid],
                            e.videoID_4 = i[6].cid,
                            a >= 8 && (e.$newVideo.show(), e.newVideo = !0, e.videoID_5 = i[a - 1].cid);
                            else {
                                var n = $(".play-one");
                                n.show(),
                                e.onlyOne = !0,
                                e.$video.attr("src", "" + e.AID + "&cid=" + i[0].cid + "&wmode=transparent&as_wide=1&crossDomain=1"),
                                e._videoInfo(e.AID)._onlinePeople(i[0].cid)
                            }
                            e._userRechargeNum()._rechargeRank().switchVideo()
                        } else console.log(t.message);
                        else console.log("\u670d\u52a1\u5668\u9519\u8bef!")
                    }
                }),
                this
            },
            videoHover: function() {
                var e, t = this,
                i = $(".mascot-box").children();
                return t.$videoList.children().hover(function() {
                    var t = $(this).index() || 0,
                    a = i.eq(t);
                    a.removeClass("animate-move-down").addClass("animate-move-up"),
                    e = t
                },
                function() {
                    i.eq(e).addClass("animate-move-down").removeClass("animate-move-up")
                }),
                this
            },
            recharge: function() {
                var e = this,
                t = $(".btn-charge"),
                i = $(".recharge-rules-detail"),
                a = $(".recharge-rules-wrap"),
                o = $(".check-up-master");
                return t.hover(function() {
                    $(this).find("img").attr("src", "")
                },
                function() {
                    $(this).find("img").attr("src", "")
                }).on("click",
                function(t) {
                    if (t.stopPropagation(), 1 != UserStatus.isLogin()) rec_rp("event", "bnj17_webloginall"),
                    window.location.href = "" + window.location.href;
                    else {
                        var i = UserStatus.status().uname || "\u65e0\u7528\u6237\u540d",
                        a = "" + (window.uid || "") + "/#!/index",
                        o = UserStatus.status().face || "",
                        n = e.rechargeAID;
                        window.location.href.indexOf("?_test") > 0 && (n = window.aid),
                        $.getScript("",
                        function() {
                            window.biliQuickElec(function() {
                                e._userRechargeNum()._rechargeRank()._bCoin()
                            },
                            {
                                mid: e.MID,
                                upname: i,
                                upurl: a,
                                upavatar: o,
                                avid: n,
                                activity: "bnj",
                                origin: 1
                            })
                        })
                    }
                    rec_rp("event", "bnj17_ webchargeclick")
                }),
                i.on("click",
                function() {
                    e._showDetailRules(a)
                }),
                o.on("click",
                function() {
                    e.nowTime >= e.startTime ? window.location.href = window.location.protocol + "": (new MessageBox).show(o, "\u6d3b\u52a8\u5c06\u4e8e1\u670827\u65e518:00\u5f00\u59cb~", 1e3),
                    rec_rp("event", "bnj17_webuplistclick")
                }),
                this
            },
            addRechargeData: function() {
                var e = this;
                return $.ajax({
                    url: "" + e.activityID + "&random_count=100",
                    type: "GET",
                    headers: {
                        "Cache-Control": "no-cache",
                        Pragma: "no-cache",
                        Expires: "-1"
                    },
                    cache: !0,
                    dataType: "json",
                    success: function(t) {
                        "[object Object]" === Object.prototype.toString.call(t) ? 0 == t.code ? e._appendPrize(t.data.winner || []) : console.log(t.code) : console.log("\u670d\u52a1\u5668\u9519\u8bef!")
                    }
                }),
                this
            },
            address: function() {
                var e, t = this,
                i = $(".close-forms", t.$alertWrap),
                a = $(".bg-top", t.$alertWrap),
                o = $(".btn-know"),
                n = $(".btn-confirm");
                return e = function() {
                    t.$alertWrap.stop(!0, !0).fadeOut("fast"),
                    t.$alertWrap.children().stop(!0, !0).fadeOut("fast"),
                    a.children().stop(!0, !0).fadeOut("fast"),
                    t.$body.css("overflow", "scroll")
                },
                n.on("click",
                function() {
                    t._verifyForm() ? ($.ajax({
                        url: "",
                        type: "POST",
                        headers: {
                            "Cache-Control": "no-cache",
                            Pragma: "no-cache",
                            Expires: "-1"
                        },
                        data: {
                            list_id: t.activityID,
                            name: t.formObj.name,
                            address: t.formObj.address,
                            postcode: t.formObj.zipCode,
                            contact: t.formObj.phone
                        },
                        cache: !0,
                        dataType: "json",
                        success: function(e) {
                            "[object Object]" === Object.prototype.toString.call(e) ? 0 === e.code ? (t._hasAddress(), (new MessageBox).show(n, "\u9886\u53d6\u5730\u5740\u5df2\u5b8c\u5584\uff0c\u6211\u4eec\u5c06\u57283~7\u4e2a\u5de5\u4f5c\u65e5\u5185\u5c3d\u5feb\u5b89\u6392\u53d1\u8d27~\u8bf7\u8010\u5fc3\u7b49\u5f85\uff01", 1200)) : (new MessageBox).show(n, e.msg, 1200) : (new MessageBox).show(n, "\u670d\u52a1\u5668\u9519\u8bef!", 1200)
                        }
                    }), setTimeout(function() {
                        i.trigger("click")
                    },
                    1500)) : (new MessageBox).show($(this), "\u8bf7\u5b8c\u5584\u5730\u5740\u4fe1\u606f~", 1e3)
                }),
                i.on("click",
                function() {
                    e(),
                    t.formattingForm()
                }),
                o.on("click",
                function() {
                    e()
                }),
                this
            },
            monitorForm: function() {
                var e = this;
                return e.$nameInput.on("input",
                function() {
                    "" != e.$nameInput.val().replace(/\s/g, "") ? e.$nameInput.parent().removeClass("error").addClass("correct") : e.$nameInput.parent().removeClass("correct").addClass("error")
                }),
                e.$phoneInput.on("input",
                function() {
                    e.$phoneInput.val().length > 11 && e.$phoneInput.val(e.$phoneInput.val().slice(0, 11)),
                    "" != e.$phoneInput.val().replace(/\s/g, "") && /^1[34578]\d{9}$/.test(e.$phoneInput.val()) ? e.$phoneInput.parent().removeClass("error").addClass("correct") : e.$phoneInput.parent().removeClass("correct").addClass("error")
                }),
                e.$zipCodeInput.on("input",
                function() {
                    e.$zipCodeInput.val().length > 6 && e.$zipCodeInput.val(e.$zipCodeInput.val().slice(0, 6)),
                    "" != e.$zipCodeInput.val().replace(/\s/g, "") && /[0-9]\d{5}(?!\d)/.test(e.$zipCodeInput.val()) ? e.$zipCodeInput.parent().removeClass("error").addClass("correct") : e.$zipCodeInput.parent().removeClass("correct").addClass("error")
                }),
                this
            },
            selectArea: function() {
                var e, t = this;
                return e = function(e) {
                    $.each(window.areaData || [],
                    function(i, a) {
                        a.id == e && (t.$city.empty(), a.children ? $.each(a.children || [],
                        function(e, i) {
                            $("<option value='" + i.id + "'>" + i.name + "</option>").appendTo(t.$city)
                        }) : $("<option value='\u65e0'>\u65e0</option>").appendTo(t.$city))
                    })
                },
                t.$province.empty(),
                $.each(window.areaData || [],
                function(e, i) {
                    $("<option value='" + i.id + "'>" + i.name + "</option>").appendTo(t.$province)
                }),
                e(t.$province.val()),
                t.$province.off("change").on("change",
                function() {
                    e(t.$province.val())
                }),
                this
            },
            showAllRecharge: function() {
                var e = this,
                t = $(".elec-modal"),
                i = $(".btn-all-recharge"),
                a = $(".modal-close");
                return i.on("click",
                function() {
                    t.stop(!0, !0).fadeIn("fast"),
                    e.$body.css("overflow", "hidden")
                }),
                a.on("click",
                function() {
                    t.stop(!0, !0).fadeOut("fast"),
                    e.$body.css("overflow", "auto")
                }),
                this
            },
            lottery: function() {
                var e, t = this,
                i = $(".lottery-rules-detail"),
                a = $(".lottery-rules-wrap"),
                o = $(".lottery-animation"),
                n = null,
                s = !0;
                return t.$btnLottery.hover(function() {
                    $(this).find("img").attr("src", "")
                },
                function() {
                    $(this).find("img").attr("src", "")
                }).on("click",
                function() {
                   
                }),
                i.on("click",
                function() {
                    t._showDetailRules(a)
                }),
                this
            },
            lotteryRecord: function() {
                var e = this,
                t = $(".lottery-record"),
                i = $(".record-list");
                return t.on("click",
                function() {}),
                this
            },
            singleShare: function() {
                var e, t = $(".lottery-share");
                return e = function(e, t) {
                    var i = [];
                    for (var a in t) i.push(a + "=" + encodeURIComponent(t[a] || ""));
                    var o = e + i.join("&");
                    return window.open(o, "", "width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no"),
                    !1
                },
                t.on("click.share",
                function() {}),
                this
            },
            functionAreaHover: function() {
                var e, t = $(".function-area"),
                i = $(".fi-head");
                t.find(".function-item").hover(function() {
                    e = $(this).find(".fi-head"),
                    i.removeClass("move-down-10px"),
                    e.addClass("move-down-10px")
                },
                function() {
                    e.removeClass("move-down-10px")
                });
                var a = $("#app_qrcode_box");
                return a.hover(function() {
                    $("#share_list").slideDown(200)
                },
                function() {
                    $("#share_list").slideUp(200)
                }),
                this
            },
            lanternHover: function() {
                var e = $(".lantern"),
                t = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
                return e.hover(function() {
                    $(this).addClass("animation-shake").one(t,
                    function() {
                        $(this).removeClass("animation-shake")
                    })
                },
                function() {}),
                this
            },
            init: function() {
                var e = this;
                window.location.href.indexOf("?_test") > 0 && (e.activityID = 263, e.MID = "15555180", e.nowTime = (new Date).getTime()),
                e.getVideoCid().videoHover().showAllRecharge().recharge().addRechargeData().address().monitorForm().selectArea().lottery().lotteryRecord().singleShare().functionAreaHover().lanternHover().dialog()
            }
        };
        e.init(),
        
        
        onLoginInfoLoaded(function() {
            e.setUserInfo().toolBalLogin()
        }),
        window.onload = function() {
            var e = (new Date).getTime(),
            t = e - start_time;
            biliTiming.report([{
                category: "pageComplete_time",
                duration: t
            }])
        }
    })
}]);
//# sourceMappingURL=main.js.map
