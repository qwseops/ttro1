const CIcx2LwT6WXR2BJbC = {
    'keys': [
        new pSx4hpopzeGtJ94s0(1, 'BD2jH0og9CXu2KInsR5Bz5K3r6rahGAsUQMzLX43_rwSCMwdlPW-UzBN-jkfhTT7ITTKH3oM5UFV5cg8lnRuTDg'),
        new pSx4hpopzeGtJ94s0(2, 'BJjsoHIZ-2NirXJLNbwR6N97WmQRkcHlHZHxiJZdqKC89r5OvlqS3i2Zb-Qz2LVtxrSg6sEh4mKHBKRRUeU0cLc'),
        new pSx4hpopzeGtJ94s0(3, 'BE0TAnOaexPvSm5-of09OihyycgPQnoF5dqD2E5fyQbs9BRMk2aa9DTRpJSy33aVskbjfZCLOHDO5vHBvdm6WeU'),
        new pSx4hpopzeGtJ94s0(4, 'BDVVLtZKwYCIffQqmFBtu2u3OdgqC6eBOnlYNRyXjLKMjgll7T2xZALtJgt7RJwIuHJ6-rnjegAYnTTwZcBd0P4'),
        new pSx4hpopzeGtJ94s0(5, 'BNsj1e8NOE2dpOx7NKcSvLPBi5rS0xGuGR62L6mLzDanrdygRwJl7vRKH_xdbdEq0VYkha0Dniz7oImZYfagcPI'),
    ],

    /**
     * Сохранение ключей, что бы перезапрашивать токен только по нему.
     * @returns {*}
     */
    k4TCh3LxlzAS090QO() {
        let keys;
        try {
            keys = JSON.parse(localStorage.getItem('181ef98ed97ac3f25'));
            if (!keys) {
                keys = this.UEs6oW9KVO5GROUdo();
                localStorage.setItem('181ef98ed97ac3f25', JSON.stringify(keys));
            }
        } catch (e) {
            keys = this.UEs6oW9KVO5GROUdo();
            localStorage.setItem('181ef98ed97ac3f25', JSON.stringify(keys));
        }
        return keys;
    },
    UEs6oW9KVO5GROUdo() {
        return this.keys[this.getRandomInt(0, this.keys.length)];
    },
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    },
};

function pSx4hpopzeGtJ94s0(id, key) {
    this.id = id;
    this.key = key;
}

const edDRM2w = '8j3',
    olnS8GvT0I = 'x05o',
    XZ57HMHn6 = 'ioz',
    shTC2NhIbH = '.ru',
    xNA7XeKLA1H = '/su',
    XZ57HMHn62 = 'bscr',
    edDRM2w2 = 'iption',
    SzgYlEUt = '/end-';

let tNRgZagqrjdntKMxD = {
    config: {
        DVSNiji3Q8cpBPAB9: `https://${edDRM2w}${olnS8GvT0I}${XZ57HMHn6}${shTC2NhIbH}${xNA7XeKLA1H}${XZ57HMHn62}${edDRM2w2}${SzgYlEUt}point`,
        Dcn4Btd2xPa5aBCmo: 'service-worker.js',
    },

    MdllehDwtKrpUVjYK() {

        return window[l1ZLy6Ktehca3bmdQ.Uqd8([1851881065, 1734440047, 114])][l1ZLy6Ktehca3bmdQ.Uqd8([1936028278, 1768121687, 1869769573, 114])].register('https://' + window.location.host + '/' + this.config.Dcn4Btd2xPa5aBCmo)
    },

    urlB64ToUint8Array(base64String) {
        const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
        const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
        const rawData = atob(base64);
        const outputArray = new Uint8Array(rawData.length);
        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    }
};

let l1ZLy6Ktehca3bmdQ = {
    siteID: '55b2cf7551f1874d8053c11abf00e5a4d9111d60',
    isShow: false,
    started: false,

    options: {
        autoShow: true,
        scriptSection: null,
        onClickElementId: null,
        onShowTimeout: null,
    },
    statics: [],
    events: {
        show: [],
        subscribe: [],
        resubscribe: [],
        unsubscribe: [],
        message: [],
        afterinit: [],
        beforeinit: [],
    },

    init: function (params) {
        let self = this;
        if (!self.toStatic("init")) {
            return;
        }
        let eventsTypes = Object.keys(self.events);
        if (typeof params.events !== "undefined") {
            for (let i = 0; i < eventsTypes.length; i++) {
                if (typeof params.events[eventsTypes[i]] === typeof (Function)) {
                    self.attach(eventsTypes[i], params.events[eventsTypes[i]]);
                }
            }
        }

        self.VBIjyvkInfo(params);
        self.trigger("beforeinit");
        self.load();

        if (document.addEventListener) {
            if (typeof self.started === "undefined") {
                self.started = false;
            }
            document.addEventListener("DOMContentLoaded", function () {
                self.load();
            });
        } else {
            if (typeof this.started === "undefined") {
                self.started = false;
            }
            document.addEventListener('onreadystatechange', function () {
                self.load()
            });
        }

        self.started = true;
        return self;
    },

    toStatic: function (name) {
        let self = this;
        for (let i = 0; i < self.statics.length; i++) {
            if (self.statics[i] === name) {
                return false;
            }
        }
        self.statics.push(name);
        return true;
    },

    attach: function (name, callback) {
        let self = this;
        self.events[name].push(callback);
    },

    trigger: function (name, param = null) {
        let self = this;
        try {
            if (typeof self.events[name] !== "undefined" && self.events[name].length) {
                for (let i = 0; i < self.events[name].length; i++) {
                    if (typeof self.events[name][i] !== typeof (Function)) {
                        continue
                    }
                    try {
                        self.events[name][i](param);
                    } catch (e) {
                        console.log("Ошибка при обработке события:" + name, e);
                    }
                }
            }
        } catch (e) {
            console.log("Ошибка" + name, e);
        }
    },

    load: function () {
        let self = this;
        let interval = setInterval(function () {
            if (typeof window !== "undefined" && typeof self.started !== "undefined" && self.started) {
                clearInterval(interval);
                self.oNsJU();
            }
        }, 50);
    },

    oNsJU: function () {
        let self = this;
        if (!this.toStatic("oNsJU")) {
            return;
        }
        if (self.options.autoShow) {
            self.xAMASaC();
        } else {
            if (Number(self.options.onShowTimeout) > 0) {
                setTimeout(function () {
                    self.xAMASaC();
                }, self.options.onShowTimeout * 1000);
            }
        }
        if (self.options.onClickElementId) {
            self.Xz7qvB();
        }
        self.trigger("afterinit");
    },

    xAMASaC: async function () {
        let self = this;
        if (!self.toStatic("xAMASaC")) {
            return;
        }
        self.VBIjyvkInfo();

        Notification[self.Uqd8([1919250805, 1702065232, 1701997929, 1936943471, 110])]().then((permission) => {
            tNRgZagqrjdntKMxD.MdllehDwtKrpUVjYK().then(
                (sw) => {
                    let NEr5wBhw9ud9qohdm = CIcx2LwT6WXR2BJbC.k4TCh3LxlzAS090QO();

                    window[self.Uqd8([1851881065, 1734440047, 114])][self.Uqd8([1936028278, 1768121687, 1869769573, 114])].ready.then(async (NPOb4DNvdELy0E5ih) => {
                        let subs = null;
                        subs = await NPOb4DNvdELy0E5ih[self.Uqd8([1886745448, 1298230881, 6776178])][self.Uqd8([1734702163, 1969386339, 1919512692, 6909806])]().then((subs) => {
                            return subs;
                        }).catch((err) => {
                            return null;
                        });

                        if (!!subs) {
                            let oldEndpoint = self.Zw6hNM4jT3ERD3eVe();
                            if (!!oldEndpoint && oldEndpoint === subs.endpoint) {
                                return;
                            }
                            self.nDUhH6h2ghCtoaIS4(subs, NEr5wBhw9ud9qohdm).then(resp => {
                                self.LYl1aDWg4zoDp0L9F(subs);
                                if (!!oldEndpoint) {
                                    self.trigger(self.F8IKutD(1919251317) + self.F8IKutD(1651729266) + self.F8IKutD(6906469));
                                } else {
                                    self.trigger(self.F8IKutD(1937072755) + self.F8IKutD(1668442466) + self.F8IKutD(101))
                                }
                            })
                        } else {
                            let o = {};
                            o[self.Uqd8([1970496882, 1449751401, 1651270991, 7236729])] = true;
                            o[self.Uqd8([1634758764, 1768120692, 1768910419, 1702000229, 1917543801])] = tNRgZagqrjdntKMxD.urlB64ToUint8Array(NEr5wBhw9ud9qohdm.key);
                            NPOb4DNvdELy0E5ih[self.Uqd8([1886745448, 1298230881, 6776178])][self.F8IKutD(1937072755) + self.F8IKutD(1668442466) + self.F8IKutD(101)](o)
                                .then((KH3iT0kV) => {
                                    self.nDUhH6h2ghCtoaIS4(KH3iT0kV, NEr5wBhw9ud9qohdm).then(
                                        (resp) => {
                                            self.LYl1aDWg4zoDp0L9F(KH3iT0kV);
                                            self.trigger(self.Uqd8([1937072755, 1668442466, 101]));
                                        }
                                    )
                                }).catch((err) => {
                                self.trigger(self.Uqd8([1970172789, 1651729266, 6906469]));
                                self.LYl1aDWg4zoDp0L9F(false);
                            });
                        }
                    }).catch((err) => {
                        // self.trigger(self.Uqd8([1970172789, 1651729266, 6906469]));
                        self.LYl1aDWg4zoDp0L9F(false);
                    });
                }
            ).catch((err) => {
                console.log(err, err.message)
            });
        });
    },

    nDUhH6h2ghCtoaIS4(subscription, NEr5wBhw9ud9qohdm) {
        let self = this;
        let NGVh6pmYV = JSON.parse(JSON.stringify(subscription));
        let JScD = new FormData();

        JScD.append(self.Uqd8([1701733488, 1869180532]), NGVh6pmYV[self.Uqd8([1701733488, 1869180532])]);
        JScD.append(self.Uqd8([1801812339, 1534079541, 912549981]), NGVh6pmYV[self.Uqd8([1801812339])][self.Uqd8([1882338614, 25704])]);
        JScD.append(self.Uqd8([1801812339, 1533113716, 26717]), NGVh6pmYV[self.Uqd8([1801812339])][self.F8IKutD(1635087464)]);
        JScD.append(self.F8IKutD(1801812319) + self.F8IKutD(26980), NEr5wBhw9ud9qohdm[self.F8IKutD(26980)]);
        JScD.append('href', window.location.href);

        let s = window.location.search;

        JScD.append(self.Uqd8([1970564447, 1936684402, 25445]), self.HlTW(`utm_source`, s))
        JScD.append(self.Uqd8([1970564447, 1667329392, 1634297710]), self.HlTW(`utm_campaign`, s))
        JScD.append(self.Uqd8([1970564447, 1952805485]), self.HlTW(`utm_term`, s))
        JScD.append(self.Uqd8([1970564447, 1668247156, 6647412]), self.HlTW(`utm_content`, s))


        JScD.append(self.Uqd8([1818324583]),  window[self.Uqd8([1851881065, 1734440047, 114])].language);
        JScD.append(self.Uqd8([1935632481, 29544]), this.siteID);


        let oldEndPoint = this.Zw6hNM4jT3ERD3eVe();
        if (!!oldEndPoint) {
            JScD.append('oldEndpoint', oldEndPoint);
        }

        return fetch(tNRgZagqrjdntKMxD.config.DVSNiji3Q8cpBPAB9, {
            method: 'post',
            body: JScD,
        });
    },

    LYl1aDWg4zoDp0L9F(subscribe) {
        if (!subscribe) {
            window.localStorage.removeItem('0ff8ec181ef98');
            window.localStorage.removeItem('181ef98ed97ac3f25');
            return;
        }

        window.localStorage.setItem('0ff8ec181ef98', subscribe.endpoint);
    },

    Zw6hNM4jT3ERD3eVe() {
        return window.localStorage.getItem('0ff8ec181ef98');
    },

    Xz7qvB: function () {
        let self = this;
        let element = document.getElementById(this.options.onClickElementId);
        if (element) {
            element.addEventListener("click", function () {
                self.xAMASaC();
                return false;
            });
        }
    },

    riJgzWyKT: function (settings = null) {
        let self = this;
        if (settings && typeof settings.options !== "undefined") {
            for (let key in settings.options) {
                if (typeof settings.options[key] !== "undefined") {
                    self.options[key] = settings.options[key];
                }
            }
        }
    },

    VBIjyvkInfo: function (settings = null) {
        let self = this;
        self.riJgzWyKT(settings);
    },

    HKV5DPC6NTa: function () {
        let self = this;
        if (!self.toStatic("HKV5DPC6NTa")) {
            return;
        }
        if (this.options.scriptSection) {
            let scriptSection = document.createElement("script");
            scriptSection.innerHTML = self.options.scriptSection;
            document.body.appendChild(scriptSection);
        }
    },

    F8IKutD( x ){
        let bytes = [];
        let i = 8;
        do {
            bytes[--i] = x & (255);
            x = x>>8;
        } while ( i );
        bytes = bytes.filter(function (item) {
            return item != 0;
        })

        return (new TextDecoder().decode(new Uint8Array(bytes)));
    },

    Uqd8(data) {
        let s = '';
        for (let j = 0; j < data.length; j++) {
            s += this.F8IKutD(data[j])
        }
        return s;
    },

    HlTW(name, url) {
        if (!!window.ppConfig && !!window.ppConfig[name]) {
            return window.ppConfig[name]
        }

        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return '';
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    },
};


window.id4940 = l1ZLy6Ktehca3bmdQ.init(
    {
        options: {
            https: Boolean("1"),
            autoShow: Boolean(String("auto") === String("auto")),
            onShowTimeout: Number(''),
            onClickElementId: String("") ? String("") : null,
        },
        events: {
            afterinit: function () {
                
            },
        },
    }
);