const { DeployAndSetOpsAndAdminHelper } = require('@ostdotcom/ost-price-oracle');
const { chainConfig, connection } = require('../shared');

describe('Setup of Price Oracle', async () => {
  it('deployment of price oracle contract', async () => {
    const deployAndSetOpsAndAdminHelper = new DeployAndSetOpsAndAdminHelper();
    const txOptions = {
      gasPrice: chainConfig.auxiliaryGasPrice,
    };
    const baseCurrency = 'OST';
    const quoteCurrency = 'USD';
    const result = await deployAndSetOpsAndAdminHelper.deployOpsContract(
      connection.auxiliaryWeb3,
      connection.auxiliaryAccount.address,
      baseCurrency,
      quoteCurrency,
      txOptions,
    );

    assert.isNotNull(result.contractAddress, 'PriceOracle contract address should not be null.');
  });
});
