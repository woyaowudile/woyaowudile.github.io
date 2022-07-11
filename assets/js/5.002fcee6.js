(window.webpackJsonp=window.webpackJsonp||[]).push([[5,11],{1019:function(i,e,p){"use strict";p(457)},1035:function(i,e,p){"use strict";p.r(e);p(218),p(37),p(426);var a=p(434),g=p(464),n={components:{imagePreview:a.default,gpExample:g.default},data:function(){return{activeNames:["0"],model:[{title:"亢龙有悔（大盘，日线）",smallImg:"gupiao/亢龙有悔/logo.png",desc:"大盘模型",mainImg:"gupiao/亢龙有悔/klyh.png",conditions:["第一天的阴线尽量小","第二天的阴线尽量大","第三天的阳线要低开高收","均线并列下行,或10、20向下、60向上，如果触碰10均线后根据阴阳线定涨跌(如果死叉,或即将出现，需及时止损)","10、20死叉60后再出现模型，太前太后都不容易涨，具体参照下面几条","模型第二天(第一天也行)下穿10， 在10下出第三天，组成模型。优先级小于上一条。","如果买入当天没有碰到10均线(包括影线，高开的阴线)，可以等第二天观察，","往往有阳线触碰后第二天阴线开启下跌，注意可当天势头不对隔天就卖","一般来说，触碰后也没有突破10均线，大概率涨不上去","10、20离60太远也不行"],example:["gupiao/亢龙有悔/example1.png","gupiao/亢龙有悔/example2.png"],remark:"\n                            <div>大阴线 实体 > 小阴线 实体 的 2倍以上</div>\n                            <div>止盈： 5-10日内的大阳线收盘价；任意阴线</div>\n                            <div>止损： 该模型的最低价</div>\n                            <div>可以多在沪深300，上证50里找</div>\n                        "},{title:"半价次新股",desc:"次新股 下跌至一半的价格，或继续下跌至33%的价位",conditions:["最开始的一字涨停板到第一波最高点后下跌，等待到50%的位置再观察是否还将继续下跌","半价买入或者底部直接买入，盈利20%"],remark:"\n                            <div>注意分仓、交易计划</div>\n                            <div>大盘趋势不好的时候，要注意使用</div>\n                        "},{title:"七星落长空 - I型（个股，日线）",smallImg:"gupiao/七星1/logo.png",desc:"下跌趋势中的底部模型",mainImg:"gupiao/七星1/qx1.png",conditions:["下跌趋势中，基本都在底部；如果不是底部，则该在底部10日内出现","60向下，模型在60下且离得较远","下跌状 > 上升妆 > 横盘状","如果在10附近，模型最后应该在10上面；如果在10下，则之后必须升到10上(一周内，否则涨不动)，且10上穿20(之后，10靠近60，否则也是滞涨)","参考黄金线，或n字上涨、或缓慢上涨","如果回调幅度过深，60要趋平"],example:["gupiao/七星1/example1-1.png","gupiao/七星1/example12-1.png","gupiao/七星1/example3.png","gupiao/七星1/example4.png","gupiao/七星1/example5.png"],remark:'<a href="https://live.study.163.com/live/index.html?courseId=100080957&lesson=103776758&type=1">1. 第一阶段 -> 短线抄底模型 -> 2、3课 </a>\n                            <div>2. 无论 I型 还是 II型，都是短线抄底模型，见好就收，不要拿着不放</div>\n                        '},{title:"七星落长空 - II型（个股，日线）",smallImg:"gupiao/七星2/logo.png",desc:"下跌趋势中的底部模型",mainImg:"gupiao/七星2/qx2.png",example:["gupiao/七星2/example12-1.png","gupiao/七星2/example2-1.png","gupiao/七星2/example2-2.png"],conditions:["10下穿60后再出现模型(且在10下)，如果先出现模型10再下穿60，有可能还继续下跌，不是底部","10、20、60多头排列向下","明确的底部，不能和前面的是横盘状， 下穿60在模型太前或太后都不太好","远离10，靠近10，参考强弱突破","卖点除了黄金线，还可以参考是否能突破均线","较好的是，三连阴一个比一个下降，后面的参考一箭双雕的模型结构","大盘向上时，10、20死叉60，"],remark:"无论 I型 还是 II型，都是短线抄底模型，见好就收，不要拿着不放。"},{title:"看跌做涨（个股，周线）",smallImg:"gupiao/价格中枢/logo.png",desc:"下跌后的筑底",mainImg:"gupiao/价格中枢/jgzs.png",example:["gupiao/价格中枢/example1.png","gupiao/价格中枢/example2.png","gupiao/价格中枢/example3.png","gupiao/价格中枢/example4.png","gupiao/价格中枢/example5.png","gupiao/价格中枢/example6.png"],remark:"\n                            低开：既可是阴线， 也可以是阳线\n                            <div>如果低开后实体很大就不是</div>\n                            新条件：\n                            <div>收益30% - 50%</div>\n                            <div>不能高开高走</div>\n                            <div>第二周最好别涨上来，希望弱势些</div>\n                            <div>第三周最好都是先跌后涨的(周一到周三跌，到周五涨)</div>\n                        "},{title:"看涨做涨（个股，周线）",smallImg:"gupiao/价格中枢/logo2.png",desc:"上涨初期或中期",mainImg:"gupiao/价格中枢/jgzs2.png",example:["gupiao/价格中枢/example2-1.png","gupiao/价格中枢/example2-2.png"],remark:"\n                            <div>第二周高开后，确认是上涨状态，周三就可以买入</div>\n                        "},{title:"看涨阴线1（个股，周线）",smallImg:"gupiao/价格中枢/看涨阴线/logo1.png",desc:"上涨途中的回调",mainImg:"gupiao/价格中枢/看涨阴线/kzyx1.png",example:["gupiao/价格中枢/看涨阴线/example1-1.png","gupiao/价格中枢/看涨阴线/example1-2.png"],remark:"\n                        <div>止损：近期最低价</div>\n                        <div>第二周阳线的低开，相对于价格中枢来说</div>\n                        <div>周中或下周买入</div>\n                        "},{title:"看涨阴线2（个股，周线）",smallImg:"gupiao/价格中枢/看涨阴线/logo2.png",desc:"上涨途中的回调",mainImg:"gupiao/价格中枢/看涨阴线/kzyx2.png",example:["gupiao/价格中枢/看涨阴线/example2-1.png","gupiao/价格中枢/看涨阴线/example2-2.png"],remark:"\n                        <div>止损：近期最低价</div>\n                        <div>第二周无论高开、低开。放量、缩量 都可以</div>\n                        <div>大阴线的影线： 上必需要但不能太长， 下最好没有或极短</div>\n                        <div>周中或下周买入</div>\n                        "},{title:"看跌阴线3（个股，周线）",smallImg:"gupiao/价格中枢/看跌阴线/logo3.png",desc:"上涨的末期",mainImg:"gupiao/价格中枢/看跌阴线/kdyx3.png",example:["gupiao/价格中枢/看跌阴线/example3-1.png","gupiao/价格中枢/看跌阴线/example3-2.png","gupiao/价格中枢/看跌阴线/example3-3.png"],remark:"\n                            <div>止盈： 50%+ </div>\n                            <div>止损： 近期最低价 </div>\n                            <div>光头不光脚(可以有一点点上影线，最好没有)</div>\n                            <div>不能是锤头</div>\n                            <div>不一定是最高，但一定是在高位出现的</div>\n                            <div>第二周 阴线、阳线无所谓。出现即卖</div>\n                        "},{title:"看跌阴线4（个股，周线）",smallImg:"gupiao/价格中枢/看跌阴线/logo4.png",desc:"下跌后的筑底",mainImg:"gupiao/价格中枢/看跌阴线/kdyx4.png",example:["gupiao/价格中枢/看跌阴线/example4-1.png","gupiao/价格中枢/看跌阴线/example4-2.png","gupiao/价格中枢/看跌阴线/example4-3.png"],remark:"\n                            <div>止盈： 50%+ </div>\n                            <div>止损： 近期最低价 </div>\n                            <div>光头不光脚(可以有一点点上影线，最好没有)</div>\n                            <div>第二周 只能阳线</div>\n                            <div>周中买入（即确定后，周三、周四买入）</div>\n                        "},{title:"上涨诱空大阴线抄底（个股，日线）",smallImg:"gupiao/诱空抄底/logo.png",desc:"上涨途中的追涨抢跑",mainImg:"gupiao/诱空抄底/szjgcddwykdyx.png",example:["gupiao/诱空抄底/example.png","gupiao/诱空抄底/example2.png","gupiao/诱空抄底/example3.png","gupiao/诱空抄底/example4.png"],remark:'\n                            <div>大阴线吃掉的涨幅，可以是阳线也可以有阴线</div>\n                            <div>不是低位也可以，只要在上涨趋势中即可</div>\n                            <div style="color:#ff891b">主力操盘，成交量可以做假。但是只能放量做假</div>\n                        '},{title:"否极泰来",smallImg:"gupiao/否极泰来/logo.png",desc:"真正的底部模型",mainImg:"gupiao/否极泰来/pjtl.png",example:["gupiao/否极泰来/example1.png","gupiao/否极泰来/example2.png"],remark:"\n                            <div>A、C 也可以是阳线，只要 C 比 A 低</div>\n                            <div>B也可以是波动很大的横盘</div>\n                            <div>D只要是阳线，也可以是十字星</div>\n                        "},{title:"飞龙在天",smallImg:"gupiao/飞龙在天/logo.png",desc:"大盘好的时候用，超短期追涨停，80%胜率",conditions:["一波横盘后，均线由粘合状态变为多头向上","之后在10上出现模型，","下跌趋势后，出现的话，从10下上穿10。","买入后上穿20，之后会回到10，触碰后可卖出"],mainImg:"gupiao/飞龙在天/flzt.png",example:["gupiao/飞龙在天/example1.png","gupiao/飞龙在天/example2.png","gupiao/飞龙在天/example3.png","gupiao/飞龙在天/example4.png"],remark:""},{title:"神龙摆尾-zero（个股，日线）",smallImg:"gupiao/神龙摆尾0/logo.png",conditions:["买点后3-5日，快速均线拐头向上，增加成功率"],desc:"急速下跌/熊市末期",mainImg:"gupiao/神龙摆尾0/slbw0.png",example:["gupiao/神龙摆尾0/example1.png","gupiao/神龙摆尾0/example2.png","gupiao/神龙摆尾0/example3.png"],remark:"\n                        "},{title:"神龙摆尾1（个股，日线）",smallImg:"gupiao/神龙摆尾1/logo.png",desc:"筑底后震荡的第一个涨停板",mainImg:"gupiao/神龙摆尾1/slbw1.png",example:["gupiao/神龙摆尾1/example1.png","gupiao/神龙摆尾1/example2.png","gupiao/神龙摆尾1/example2.png"],remark:"\n                            <div>盈利30% - 50%</div>\n                            <div>下影线可以扎破箱体，但实体一定不能</div>\n                            <div>V字型横盘也可以，但是不好</div>\n                            <div>止盈的50%是从第一个涨停板的收盘价开始算，而不是买入的开盘价</div>\n                        "},{title:"神龙摆尾2（个股，日线）",smallImg:"gupiao/神龙摆尾2/logo.png",desc:"筑底后震荡的第一个涨停板",mainImg:"gupiao/神龙摆尾2/slbw2.png",example:["gupiao/神龙摆尾2/example1.png","gupiao/神龙摆尾2/example2.png","gupiao/神龙摆尾2/example2.png"],remark:"\n                            <div>盈利30% - 50%</div>\n                            <div>k线的收盘价不能跌破涨停板的收盘价</div>\n                            <div>下影线可以刺穿</div>\n                            <div>如果是阴线，则任意位置(实体、影线)都不能跌破箱体</div>\n                            <div>成交量依次降低也可以，最好还是5和10的死叉</div>\n                        "},{title:"神龙摆尾3（个股，日线）",smallImg:"gupiao/神龙摆尾3/logo.png",desc:"筑底后震荡的第一个涨停板",conditions:["60向下或持平，出现模型上穿60（不能全部站在60上），且10金叉60","金叉是买入后一周内出现，或出现金叉后一周内出现模型都可","买入后k线会在10上方运行，跌破10会在60上方运行，10离60太远会往60靠近","具体看黄金线，破前高估计1-2个月"],mainImg:"gupiao/神龙摆尾3/slbw.png",example:["gupiao/神龙摆尾3/example1.png","gupiao/神龙摆尾3/example2.png","gupiao/神龙摆尾3/example3.png","gupiao/神龙摆尾3/example4.png","gupiao/神龙摆尾3/example5.png","gupiao/神龙摆尾3/example6.png","gupiao/神龙摆尾3/example7.png","gupiao/神龙摆尾3/example8.png","gupiao/神龙摆尾3/example9.png"],remark:"\n                            <div>振幅差不多5%即可</div>\n                            <div>最好出现在上涨初期</div>\n                            <div>卖点自己把握</div>\n                            <div>和神1区别就是不需要一个长周期的横盘后的涨停板</div>\n                        "},{title:"神龙摆尾4（个股，日线）",smallImg:"gupiao/神龙摆尾4/logo.png",desc:"（21/07/24 - 2:18）",mainImg:"gupiao/神龙摆尾4/slbw4.png",example:["gupiao/神龙摆尾4/example1.png","gupiao/神龙摆尾4/example2.png"],remark:""},{title:"反客为主（个股，日线）",smallImg:"gupiao/反客为主/logo.png",desc:"上涨结构(*②)中的某个位置",mainImg:"gupiao/反客为主/fkww.png",example:["gupiao/反客为主/example1.png"]},{title:"峰回路转（个股，日线）",smallImg:"gupiao/峰回路转/logo.png",desc:"上涨结构的主力洗盘",conditions:["模型中2根实体不要比最近的大","模型开始站在10上或离10不远","远离10后回调到10附近可继续等待, 看跌看涨主要看下穿10的k线，参考强弱突破","模型第一根k线与前一个比较，要么跳空不回补(包括影线)，要么没缺口","2周内"],mainImg:"gupiao/峰回路转/fhlz.png",example:["gupiao/峰回路转/example1.png","gupiao/峰回路转/example2.png","gupiao/峰回路转/example3.png","gupiao/峰回路转/example4.png","gupiao/峰回路转/example5.png","gupiao/峰回路转/example6.png"],remark:"\n                            <div>是在上涨结构中，而不是在上涨趋势中</div>\n                        "},{title:"以逸待劳（个股，日线）",smallImg:"gupiao/以逸待劳/logo.png",desc:"底部的主力洗盘",conditions:["第一种：","要确定的底部，第五天阳线不该很大。第六天或突破的那天，不能直接超过第一天。涨的很慢，或横盘后下跌","第二天不能跳空低开太多","模型中后部分(包括到买入那天为止)应该从60下，上穿60。 60下降或趋平","不确定可以看黄金分割线，在6.18下就不好","第二种","10、20、60多头并列向上","远离10后出现模型，模型中后部碰到10均线，且没下穿10。盈利20%~50%"],mainImg:"gupiao/以逸待劳/yydl.png",example:["gupiao/以逸待劳/example1.png","gupiao/以逸待劳/example2.png","gupiao/以逸待劳/example3.png","gupiao/以逸待劳/example4.png","gupiao/以逸待劳/example5.png","gupiao/以逸待劳/example6.png","gupiao/以逸待劳/example7.png","gupiao/以逸待劳/example8.png"],remark:"\n                            <div>一定是下跌之后的上涨中</div>\n                            <div>第五日的只要是阳线就行。不管高开低开、放量缩量、真假都无所谓</div>\n                            <div>等待一个爆发，没有可继续等待</div>\n                        "},{title:"出水芙蓉（个股，日线）",smallImg:"gupiao/出水芙蓉/logo.png",conditions:["在哪个均线上出现，就不要跌破哪个均线","成功：","1. n字上涨，模型出现后突破横盘的价格，一般多头向上的时候","2. 底部横盘时，多头并列向上时出现，模型的收盘价在一波横盘走势的50%以上，越高越好","失败：","1. 远离10后，再靠近10的时候出现(或跌破10)"],desc:"主力低位洗盘模型，大盘比较弱的时候用",mainImg:"gupiao/出水芙蓉/csfr.png",example:["gupiao/出水芙蓉/example1.png","gupiao/出水芙蓉/example2.png","gupiao/出水芙蓉/example3.png"],remark:"\n                            <div>最好不要十字星</div>\n                        "},{title:"一箭双雕（个股，日线）",smallImg:"gupiao/一箭双雕/logo.png",conditions:["60趋平或向上","10、20上穿60的金叉后，死叉前出现","模型在60均线很近的位置，随后上穿或买入当天上穿60，","如果大盘强势中：","10、20、60多头向上，暴涨；","20下穿10后，又接近60或下穿60，会失败"],desc:"中继加速模型，主力拉升前的洗盘",mainImg:"gupiao/一箭双雕/yjsd.png",example:["gupiao/一箭双雕/example1.png","gupiao/一箭双雕/example2.png","gupiao/一箭双雕/example3.png","gupiao/一箭双雕/example5.png","gupiao/一箭双雕/example4.png","gupiao/一箭双雕/example6.png","gupiao/一箭双雕/example7.png","gupiao/一箭双雕/example8.png","gupiao/一箭双雕/example9.png","gupiao/一箭双雕/example10.png","gupiao/一箭双雕/example11.png"],remark:"\n                            <div>缓慢上涨 到 急速拉升 的过渡点</div>\n                            <div>机会较少，盈利也会很多的。止盈自己把握，也可以使用推高止损的方式扩大盈利</div>\n                            <div>两个阴线最好是高开的(加分项，不是必需的)</div>\n                            <div>案例中的第一根阳线，可以不是很大</div>\n                        "},{title:"柳暗花明（个股，日线）",smallImg:"gupiao/柳暗花明/logo.png",desc:"底部反转模型，主力底部的强势洗盘",mainImg:"gupiao/柳暗花明/lahm.png",remark:"\n                            <div>出现以后，必然是底</div>\n                        "},{title:"葛式八法 - 买2（个股，周日线）",smallImg:"gupiao/葛式八法2/logo.png",mainImg:"gupiao/葛式八法2/gsbf2.png",example:["gupiao/葛式八法2/example2-1.png","gupiao/葛式八法2/example2-2.png"],remark:"\n                            <div></div>\n                        "},{title:"神奇均线（个股，日线）",smallImg:"gupiao/神奇均线/logo.png",desc:"下跌横盘后， 上涨初期",conditions:["回调的幅度(举例跳起来之前的下蹲，不能太低不能太高)","有效突破/有效支撑(举例箱体的上下沿)"],mainImg:"gupiao/神奇均线/sqjx.png",example:["gupiao/神奇均线/example1.png","gupiao/神奇均线/example2.png"],remark:'\n                            <div><span style="color: #F4882F">快：5；</span><span style="color: #0096EF">中：13；</span><span style="color: #000">慢：34</span></div>\n                            <div style="font-size: 20px">A：</div>\n                            <div>k线允许跌破慢速均线</div>\n                            <div style="font-size: 20px">B：</div>\n                            <div>慢速均线、中速均线下穿快速均线后，无论谁上谁下</div>\n                            <div>止损： 1. 快速、中速 死叉；2. 慢速均线向下</div>\n                        '},{title:"神奇数字（个股，月>周>日）",smallImg:"gupiao/神奇数字/logo.png",desc:"（21/07/31 - 2:20）",mainImg:"gupiao/神奇数字/sqsz.png",example:["gupiao/神奇数字/example1.png","gupiao/神奇数字/example2.png","gupiao/神奇数字/example3.png"],remark:"\n                            <div>买入后短期内即可达到目标</div>\n                        "},{title:"神奇数字2（个股，月>周>日）",smallImg:"gupiao/神奇数字2/logo.png",desc:"（21/07/31 - 2:20）",mainImg:"gupiao/神奇数字2/sqsz2.png",remark:"\n                            <div>不需要顶顶抬高，但第一个高点是之前的冲高，后面的高点都没有达到前高</div>\n                            <div>四个确定高点，7跟k线以内有效突破后下月买入，没有也可以第8根买入</div>\n                            <div>第一个高点回落后产生的低点，但第4个高点后的7根k线都不能低于该点</div>\n                        "},{title:"鱼跃龙门（个股，月线）",smallImg:"gupiao/鱼跃龙门/logo.png",mainImg:"gupiao/鱼跃龙门/yylm.png",example:["gupiao/鱼跃龙门/example1.png","gupiao/鱼跃龙门/example2.png"],remark:"\n                            <div>时间不确定，有可能3月，更多是半年-1年左右</div>\n                            <div>不设止损</div>\n                            <div>从下跌到翻倍, 4年以上， 下跌2年，筑底2-3年</div>\n                            <div>筑底时间要长</div>\n                            <div>底部可是,单底、多底、圆弧底, 最好还有上升三角形(反转形态)</div>\n                        "},{title:"隔山打牛（个股，日线）",smallImg:"gupiao/隔山打牛/logo.png",desc:"上涨初期或中期",conditions:["模型可在均线上或下，但买入必须在10均线上(参考强弱)，且不能离10太远，不能跌破20","模型不能一个比一个高，这会消耗上涨能量，但一般都要比第一个高，也不能一个比一个低，","不能有两个阳线差不多大","60向上或持平，多头并列向上"],mainImg:"gupiao/隔山打牛/gsdn.png",example:["gupiao/隔山打牛/example1.png","gupiao/隔山打牛/example2.png","gupiao/隔山打牛/example3.png","gupiao/隔山打牛/example4.png","gupiao/隔山打牛/example5.png","gupiao/隔山打牛/example6.png"],remark:"\n                            <div>盈利 10%-30%.一月内</div>\n                            <div>成交量不必依次降低</div>\n                        "},{title:"大有（个股，日线）",smallImg:"gupiao/大有/logo.png",conditions:["慢速均线向上或趋平","金叉后不久"],desc:"上涨初期的洗盘模型（21/07/10 - 2:30）",mainImg:"gupiao/大有/dy.png",example:["gupiao/大有/example1.png","gupiao/大有/example2.png","gupiao/大有/example3.png"],remark:"\n                            <div>盈利 10%-20%.俩月内</div>\n                            <div>4连阳就是4个，3个不行，5个也不行</div>\n                            <div>4连阳实体应该都不大</div>\n                            <div>最后的阳线最好不大，也可以是涨停板</div>\n                            <div>期望是买入后才涨，不应该是涨过了才买</div>\n                        "},{title:"一触即发(个股， 日线)",smallImg:"gupiao/窓璧轴/一触即发/logo.png",desc:"窓璧轴理论（21/07/17 - 1:30）",mainImg:"gupiao/窓璧轴/一触即发/ycjf.png",example:["gupiao/窓璧轴/一触即发/example1.png","gupiao/窓璧轴/一触即发/example2.png","gupiao/窓璧轴/一触即发/example3.png"],remark:"\n                            <div>运行一周以上，>5天才有效</div>\n                            <div>上涨/下跌，应该能创新高/新低</div>\n                            <div>连续的涨停板没有参考价值</div>\n                        "},{title:"一举中第(个股， 日线)",smallImg:"gupiao/窓璧轴/一举中第/logo.png",desc:"窓璧轴理论",mainImg:"gupiao/窓璧轴/一举中第/yjzd.png",example:["gupiao/窓璧轴/一举中第/example1.png","gupiao/窓璧轴/一举中第/example2.png","gupiao/窓璧轴/一举中第/example3.png"],remark:"\n                            <div>运行一周以上，最好>5天</div>\n                            <div>影线填补、实体填补都可以</div>\n                            <div>第二次填补要小于之前缺口的1/2，也就是小部分</div>\n                        "},{title:"一线生机(个股， 日线)",smallImg:"gupiao/窓璧轴/一线生机/logo.png",desc:"窓璧轴理论",mainImg:"gupiao/窓璧轴/一线生机/yxsj.png",example:["gupiao/窓璧轴/一线生机/example1.png","gupiao/窓璧轴/一线生机/example2.png"],remark:"\n                            <div>等待确定的阳线： 中阳线、大阳线</div>\n                        "},{title:"一反常态(个股， 日线)",smallImg:"gupiao/窓璧轴/一反常态/logo.png",desc:"窓璧轴理论",mainImg:"gupiao/窓璧轴/一反常态/yfct.png",example:["gupiao/窓璧轴/一反常态/example1.png","gupiao/窓璧轴/一反常态/example2.png","gupiao/窓璧轴/一反常态/example3.png"],remark:"\n                            <div>实体完全填补，无论阴线、阳线</div>\n                            <div></div>\n                            <div>说明主力控盘力度极强</div>\n                        "},{title:"有效突破(个股， 日线)",smallImg:"gupiao/有效突破/logo.png",desc:"熊市末期 价格筑底后 (缺口理论应用)",mainImg:"gupiao/有效突破/yxtp.png",example:["gupiao/有效突破/example1.png","gupiao/有效突破/example2.png","gupiao/有效突破/example3.png"],remark:"\n                            <div>缺口 ‘不被填补’</div>\n                            <div>一周内，时间应不太长</div>\n                            <div>阳线实体必须高过近期所有实体</div>\n                        "},{title:"蜻蜓点水(个股， 日线)",smallImg:"gupiao/蜻蜓点水/logo.png",desc:"价格筑底 上涨初期 (缺口理论应用)",mainImg:"gupiao/蜻蜓点水/qtds.png",example:["gupiao/蜻蜓点水/example1.png","gupiao/蜻蜓点水/example2.png"],remark:"\n                            <div>缺口被填补无论阴阳线或影线</div>\n                        "},{title:"结界均线(个股， 日线)",smallImg:"gupiao/结界均线/logo.png",desc:"75日 均线（21/07/17 - 2:53）",mainImg:"gupiao/结界均线/jx.png",example:["gupiao/结界均线/example1.png","gupiao/结界均线/example2.png","gupiao/结界均线/example3.png"],remark:"\n                            <div>实体不能跌破均线</div>\n                            <div>必须要有下影线（影线可以不破均线）</div>\n                        "},{title:"龙战于野(个股， 日线)",smallImg:"gupiao/龙战于野/logo.png",desc:"低位涨停（21/07/17 - 3:20）",conditions:["下跌后的底部，上涨后的横盘。模型出现后，不能太高或太低于横盘的价格","模型在后半段突破前高，或买点破前高, 不能一个比一个低","60趋平或向上","离开10均线后会回到10均线，参考强弱突破","涨停板除外， 模型开始就离10很远就不好","1-2周，卖出可参考接触到10均线后所处在的黄金分割线或压力位位置来决定是否卖出（如果前面有突破但是又回来的话，也可继续观察）","待定：","阴线上影线过长，且后一日收盘价低于阴线最高价，会失败","突破50后可破前高，或失败止损后，等待收盘价重新收在模型收盘价上(不能跌破6.18)","如果被压制在50和38.2之间，就失败了"],mainImg:"gupiao/龙战于野/lzyy.png",example:["gupiao/龙战于野/example1.png","gupiao/龙战于野/example2.png","gupiao/龙战于野/example3.png","gupiao/龙战于野/example4.png","gupiao/龙战于野/example5.png","gupiao/龙战于野/example6.png","gupiao/龙战于野/example7.png","gupiao/龙战于野/example8.png"],remark:"\n                            <div>涨停板可以是一字</div>\n                            <div>大阴线也可以是涨停板</div>\n                            <div>阴、阳线高开低开平开无所谓</div>\n                            <div>低位、中位都可以，也可以横盘中使用，但必须是低位</div>\n                            <div>止损： 涨停版的开盘价（适用于所有用到涨停板的模型）</div>\n                        "},{title:"v型反转(个股， 日线)",smallImg:"gupiao/v型反转/logo.png",desc:"",mainImg:"gupiao/v型反转/vxfz.png",example:["gupiao/v型反转/example1.png","gupiao/v型反转/example2.png","gupiao/v型反转/example3.png","gupiao/v型反转/example4.png"],remark:"\n                        "},{title:"双龙取水(个股， 日线)",smallImg:"gupiao/双龙取水/logo.png",desc:"",mainImg:"gupiao/双龙取水/slqs.png",example:["gupiao/双龙取水/example1.png","gupiao/双龙取水/example2.png","gupiao/双龙取水/example3.png","gupiao/双龙取水/example4.png"],remark:"\n                            <div>一字板也算，一字和涨停板的4种排列组合</div>\n                        "},{title:"事不过三(个股， 日线 20220319-2:00)",smallImg:"gupiao/事不过三/logo.png",desc:"",conditions:["模型从头到尾，60应该是横盘状(向上向下的幅度不大)","如果模型呈下降状态，且到10下，最后一根必须要回碰到10;或模型在10和60中间","10、20即将上穿60。有可能接下来会横盘一段时间，等多头向上的时候会有一波爆发","如果大盘这个时间60向下改为趋平，10、20即将上破60。那么上一条的爆发会很多","如果在60上出现模型，最后就必须站在10上"],mainImg:"gupiao/事不过三/sbg3.png",example:["gupiao/事不过三/example1.png","gupiao/事不过三/example2.png","gupiao/事不过三/example3.png","gupiao/事不过三/example4.png","gupiao/事不过三/example5.png","gupiao/事不过三/example6.png","gupiao/事不过三/example7.png","gupiao/事不过三/example8.png"],remark:"\n                            <div>一字板也算，一字和涨停板的4种排列组合</div>\n                            <div>最好横盘一个月左右</div>\n                        "},{title:"九死一生1(个股， 日线)",smallImg:"gupiao/九死一生/logo1.png",desc:"",mainImg:"gupiao/九死一生/jsys1.png",example:["gupiao/九死一生/example1-1.png","gupiao/九死一生/example1-2.png","gupiao/九死一生/example1-3.png"],remark:"\n                            <div>熊市末期也可以是上涨后的回调，叫阶段性熊市</div>\n                        "},{title:"九死一生2(个股， 日线)",smallImg:"gupiao/九死一生/logo2.png",desc:"",mainImg:"gupiao/九死一生/jsys2.png",example:["gupiao/九死一生/example2-1.png","gupiao/九死一生/example2-2.png","gupiao/九死一生/example2-3.png"],remark:"\n                            <div>第二天可以是阴线、可以是阳线</div>\n                        "},{title:"有惊无险(个股， 日线)",smallImg:"gupiao/有惊无险/logo.png",desc:"拉升前的主力洗盘模型",mainImg:"gupiao/有惊无险/yjwx.png",example:["gupiao/有惊无险/example1.png","gupiao/有惊无险/example2.png","gupiao/有惊无险/example3.png"],remark:"\n                            <div>止盈自己把握</div>\n                            <div>一定是筑底后涨起来之后，即在上涨途中，或回调后的地方出现</div>\n                        "},{title:"雾里看花(个股， 日线)",smallImg:"gupiao/雾里看花/logo.png",desc:"",mainImg:"gupiao/雾里看花/wlkh.png",remark:"\n                            <div>十字星相比阳线：最高(十字星) > 最高(阳线)；收盘价 > 收盘价；最低价 > 最低价</div>\n                            <div>十字星实体最好小</div>\n                            <div>上涨初期，最好不要涨太高了，而不是在底部找</div>\n                            <div>无所谓影线、无所谓阴阳，下影线不能太长</div>\n                            <div>第二日阳线下影线无所谓，阳线无所谓大小</div>\n                        "},{title:"诸神黄昏(个股， 日线 20220514-3:11)",smallImg:"gupiao/诸神黄昏/logo.png",desc:"",mainImg:"gupiao/诸神黄昏/zshh.png",example:["gupiao/诸神黄昏/example1.png","gupiao/诸神黄昏/example2.png","gupiao/诸神黄昏/example3.png","gupiao/诸神黄昏/example4.png"],remark:"\n                            <div>\n                                1. 下跌后的横盘，出现涨停板，之后没有涨上去(甚至跌下来)，都可参考\n                            </div>\n                            <div>2. 一定是收盘价高过，如果同事最高价也高过(即使几分)，更好</div>\n                            <div>3. 不要以价格高而不敢买，不要以价格低而抄底。涨跌和价格多少没有关系</div>\n                            <div>4. 3、4是变形版的神龙，需要自己思考思考</div>\n                        "}]}},computed:{getStyle:function(){return{width:"80px","margin-left":"10px !important","vertical-align":"middle"}},getExampleName:function(){return function(i){var e=i;return i.indexOf("（")&&(e=i.split("（")[0]),e}}}},l=(p(1019),p(36)),m=Object(l.a)(n,(function(){var i=this,e=i.$createElement,p=i._self._c||e;return p("div",{staticClass:"gupiao-collapse"},[p("el-collapse",{model:{value:i.activeNames,callback:function(e){i.activeNames=e},expression:"activeNames"}},i._l(i.model,(function(e,a){return p("el-collapse-item",{attrs:{name:a}},[p("template",{staticClass:"collapse-title",slot:"title"},[p("span",[i._v(i._s(e.title))]),i._v(" "),e.smallImg?p("image-preview",{attrs:{imgUrl:e.smallImg,setStyle:i.getStyle}}):i._e()],1),i._v(" "),p("div",{staticClass:"gupiao-collapse--content"},[p("div",[p("div",{staticClass:"size16 title flexbox"},[p("span",{staticClass:"flex1"},[i._v("说明：")]),i._v(" "),p("gpExample",{attrs:{name:i.getExampleName(e.title)}})],1),i._v(" "),p("div",{staticClass:"red textIndent"},[i._v(i._s(e.desc))])]),i._v(" "),e.mainImg?p("div",[p("image-preview",{attrs:{imgUrl:e.mainImg}})],1):i._e(),i._v(" "),e.conditions?p("div",[p("div",{staticClass:"size16 title"},[i._v("条件：")]),i._v(" "),i._l(e.conditions,(function(e,a){return p("p",{staticClass:"textIndent"},[i._v(i._s(e))])}))],2):i._e(),i._v(" "),e.example?p("div",[p("div",{staticClass:"size16 title"},[i._v("例子：")]),i._v(" "),i._l(e.example,(function(i,e){return p("div",{staticClass:"margin50100 box1297e4"},[p("image-preview",{attrs:{imgUrl:i}})],1)}))],2):i._e(),i._v(" "),e.remark?p("div",[p("div",{staticClass:"size16 title"},[i._v("备注：")]),i._v(" "),p("div",{staticClass:"textIndent",domProps:{innerHTML:i._s(e.remark)}})]):i._e()])],2)})),1)],1)}),[],!1,null,"7cf1cddc",null);e.default=m.exports},423:function(i,e,p){},426:function(i,e,p){"use strict";var a=p(44),g=p(12),n=p(4),l=p(220),m=p(219),o=p(11),t=p(38),d=p(134),u=p(221),v=p(93),s=p(27),x=p(62),r=p(45),c=p(222),I=p(97),k=p(217),f=p(5),_=k.UNSUPPORTED_Y,h=Math.min,y=[].push,b=n(/./.exec),w=n(y),z=n("".slice);l("split",(function(i,e,p){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(i,p){var n=s(t(this)),l=void 0===p?4294967295:p>>>0;if(0===l)return[];if(void 0===i)return[n];if(!m(i))return g(e,n,i,l);for(var o,d,u,v=[],x=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(i.sticky?"y":""),c=0,k=new RegExp(i.source,x+"g");(o=g(I,k,n))&&!((d=k.lastIndex)>c&&(w(v,z(n,c,o.index)),o.length>1&&o.index<n.length&&a(y,v,r(o,1)),u=o[0].length,c=d,v.length>=l));)k.lastIndex===o.index&&k.lastIndex++;return c===n.length?!u&&b(k,"")||w(v,""):w(v,z(n,c)),v.length>l?r(v,0,l):v}:"0".split(void 0,0).length?function(i,p){return void 0===i&&0===p?[]:g(e,this,i,p)}:e,[function(e,p){var a=t(this),l=null==e?void 0:x(e,i);return l?g(l,e,a,p):g(n,s(a),e,p)},function(i,a){var g=o(this),l=s(i),m=p(n,g,l,a,n!==e);if(m.done)return m.value;var t=d(g,RegExp),x=g.unicode,r=(g.ignoreCase?"i":"")+(g.multiline?"m":"")+(g.unicode?"u":"")+(_?"g":"y"),I=new t(_?"^(?:"+g.source+")":g,r),k=void 0===a?4294967295:a>>>0;if(0===k)return[];if(0===l.length)return null===c(I,l)?[l]:[];for(var f=0,y=0,b=[];y<l.length;){I.lastIndex=_?0:y;var C,j=c(I,_?z(l,y):l);if(null===j||(C=h(v(I.lastIndex+(_?y:0)),l.length))===f)y=u(l,y,x);else{if(w(b,z(l,f,y)),b.length===k)return b;for(var E=1;E<=j.length-1;E++)if(w(b,j[E]),b.length===k)return b;y=f=C}}return w(b,z(l,f)),b}]}),!!f((function(){var i=/(?:)/,e=i.exec;i.exec=function(){return e.apply(this,arguments)};var p="ab".split(i);return 2!==p.length||"a"!==p[0]||"b"!==p[1]})),_)},429:function(i,e,p){"use strict";p(423)},457:function(i,e,p){},464:function(i,e,p){"use strict";p.r(e);var a={name:"gp-example",components:{imagePreview:p(434).default},props:{name:String},data:function(){return{dialog:{visible:!1,title:"提示"}}},computed:{getImgUrl:function(){return"gupiao/亢龙有悔/example1.png"}},methods:{click:function(){this.dialog.visible=!0}}},g=(p(429),p(36)),n=Object(g.a)(a,(function(){var i=this,e=i.$createElement,p=i._self._c||e;return p("div",{staticClass:"gp-example"},[p("el-button",{attrs:{type:"text"},on:{click:i.click}},[i._v(i._s(i.name))]),i._v(" "),p("el-dialog",{staticClass:"gp-example--dialog",attrs:{title:i.dialog.title,visible:i.dialog.visible,width:"100%"},on:{"update:visible":function(e){return i.$set(i.dialog,"visible",e)}}},[p("div",[p("el-collapse",[p("el-collapse-item",{attrs:{name:"2"}},[p("div",{attrs:{slot:"title"},slot:"title"},[i._v("\n                        失败\n                    ")]),i._v(" "),p("image-preview",{attrs:{imgUrl:i.getImgUrl,width:"200"}})],1),i._v(" "),p("el-collapse-item",{attrs:{name:"3"}},[p("div",{attrs:{slot:"title"},slot:"title"},[i._v("\n                        成功\n                    ")]),i._v(" "),p("image-preview",{attrs:{imgUrl:i.getImgUrl,width:"200"}})],1)],1)],1),i._v(" "),p("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[p("el-button",{on:{click:function(e){i.dialog.visible=!1}}},[i._v("取 消")])],1)])],1)}),[],!1,null,"69e3e8e2",null);e.default=n.exports}}]);