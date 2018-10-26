// 월요일 2시까지 완성

class Lotto {
    constructor() {
        this.money = 0;
        this.list = [];
        this.winTable = {
            3: {
                winNum: 0,
                prize: 5000
            },
            4: {
                winNum: 0,
                prize: 10000
            },
            5: {
                winNum: 0,
                prize: 100000
            },
            6: {
                winNum: 0,
                prize: 1000000
            }
        }
    }
    buyLotto(money) {
        this.money = money;
        for (let i = 0; i < money / 1000; i++){
            this.list.push(this.createLotto())
        }
        this.print();
    }
    createLotto() {
        const lottoNumberList = [];
        const numList = new Array(45).fill(0).map((num, i) => i + 1);
        for(let i = 0; i < 6; i++) {
            const randNum = Math.floor(Math.random() * numList.length)
            const lottoNumber = numList.splice(randNum, 1)[0];
    
            lottoNumberList.push(lottoNumber);
        }
    
        return lottoNumberList.sort((a,b) => a-b);
    }
    setLuckyNumber(array) {
        this.matchNumber(this.list, array);
        let profitRate = this.profitsRate();
        return profitRate;
        // print(profitRate)
    }
    matchNumber(lottoList, luckyarray) {
        for (let lottoNum of lottoList) {
            let count = 0;
            lottoNum.forEach(num => luckyarray.some(luckyNum => luckyNum === num) ? count++ : count);
            if (count > 2) this.winTable[count].winNum++
        }
    }
    profitsRate() {
        let totalPrize = this.sumPrize();
        return ((totalPrize) / this.money) * 100;
    }

    sumPrize(){
        const totalPrize = Object.keys(this.winTable).reduce((total, count) => {
            return total += this.winTable[count].winNum * this.winTable[count].prize;
        }, 0)
        return totalPrize;
    }
    print(profitRate) {
        if (!arguments) {
            console.log(this.list);
        } else {
            // 당첨프린트
            // init();
        }
    }
}

const lotto = new Lotto;
console.log(lotto.buyLotto(3000));
console.log(lotto.list);
console.log(lotto.setLuckyNumber([2,15,21,24,43,45]));

// function init() {

// }
// }