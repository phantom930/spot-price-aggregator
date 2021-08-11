const { expectRevert } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');
const { tokens } = require('./helpers.js');

const SynthetixOracle = artifacts.require('SynthetixOracle');

describe('SynthetixOracle', async function () {
    function symbolToBytes (symbol) {
        let result = '0x';
        for (let i = 0; i < symbol.length; i++) {
            result += symbol.charCodeAt(i);
        }
        return result;
    }
    
    before(async function () {
        this.synthetixOracle = await SynthetixOracle.new('0xd69b189020EF614796578AfE4d10378c5e7e1138', '0x4E3b31eB0E5CB73641EE1E65E7dCEFe520bA3ef2');
    });

    it('should correct convert', async function () {
        expect(symbolToBytes('sREN')).equal('0x115826978');
        expect(symbolToBytes('iDOT')).equal('0x105687984');
    });

    it('should return rates', async function () {
        let result = await this.synthetixOracle.getRate(tokens.sREN, tokens.iDOT, tokens.NONE);
        console.log(result.rate.toString(), result.weight.toString());

        result = await this.synthetixOracle.getRate(tokens.ETH, tokens.iDOT, tokens.NONE);
        console.log(result.rate.toString(), result.weight.toString());

        result = await this.synthetixOracle.getRate(tokens.sREN, tokens.ETH, tokens.NONE);
        console.log(result.rate.toString(), result.weight.toString());

        result = await this.synthetixOracle.getRate(tokens.ETH, tokens.ETH, tokens.NONE);
        console.log(result.rate.toString(), result.weight.toString());
    });

    it('should revert with error', async function () {
        const incorrectSREN = '0xD31533E8d0f3DF62060e94B3F1318137bB6E3525';

        await expectRevert(
            this.synthetixOracle.contract.methods.getRate(incorrectSREN, tokens.iDOT, tokens.NONE).call(),
            'SO: key is diff from token',
        );
    });
});
