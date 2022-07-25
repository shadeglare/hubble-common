import { HubbleConfig } from '../models';
import { PublicKey } from '@solana/web3.js';

export const HUBBLE_CONFIGS: HubbleConfig[] = [
  {
    cluster: 'mainnet-beta',
    kamino: {
      mints: {
        usdt: new PublicKey('AcU8CfJiLEBn1x7Cgx8atX6DdebmdQtNSsJBkQyf6Q4L'),
        usdh: new PublicKey('kfZGSThBdZbZY6cDSHP7NmCWa6D2hFc5kjBuGHREzZ3'),
        usdc: new PublicKey('HEzfH7PCNSCU92zdk3iaKG4E9hQTErfgVGvqgywEvPzu'),
        stsol: new PublicKey('ESba8sT1R7WPiE3weBU1u6UqEmXRuM8Rs1LLvXayEizf'),
        msol: new PublicKey('2wMQTELEgEcK7V3gwZBH58WvGcRZsyaWNpebqyFugGKe'),
        sol: new PublicKey('So11111111111111111111111111111111111111112'),
        solMsol: new PublicKey('7hUuLSz41MAJTASQTr6VnrRzZ5oyf2DNmLcpTHqZVyro'),
        solStsol: new PublicKey('2MpRMgTDALUqa42DNAgqM6X8TAqRSojhvtmgM15Dei1B'),
        usdcUsdt: new PublicKey('Fk3UsY9LtbKyqU6hwuM86Rxq3HTokDKcieJjpmbn1CRn'),
        usdhUsdc: new PublicKey('HYszS8Y59xwAtmZZ5ja2XjLpvc8eHmmzc1craEdRzfMb'),
        usdhUsdt: new PublicKey('6xAFTAV3V7vbWhPgmbUrSndpE85MHNu1tUyRecX9JHS7'),
      },
    },
    scope: {
      oracleMappings: new PublicKey('Chpu5ZgfWX5ZzVpUx9Xvv4WPM75Xd7zPJNDPsFnCpLpk'),
      oraclePrices: new PublicKey('3NJYftD5sjVfxSnUdZ1wVML8f3aC6mp1CXCL6L7TnU8C'),
      programId: new PublicKey('HFn8GnPADiny6XqUoWE8uRPPxb29ikn4yTuPa9MF2fWJ'),
      configurationAccount: new PublicKey('AdTiP7QyjUyv6crF4H8z7fxJKU7Z5eCAGvJN1Y55cXxb'),
    },
    borrowing: {
      programId: new PublicKey('HubbLeXBb7qyLHt3x7gvYaRrxQmmgExb7fCJgDqFuB6T'),
      accounts: {
        stablecoinMint: new PublicKey('USDH1SM1ojwWUga67PGrgFWUHibbjqMvuMaDkRJTgkX'),
        stablecoinMintAuthority: new PublicKey('AkzcmXAWWmGnVmyEfW5eeaHdUUrE9yxGaS2GmtV5UEMq'),
        hbbMintAuthority: new PublicKey('CNDdAftLoTNZUyb3Tb4WHFZaKDuGYUtZ23gUhYdzKZS'),
        mint: {
          ETH: new PublicKey('7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs'),
          BTC: new PublicKey('9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E'),
          SRM: new PublicKey('SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt'),
          RAY: new PublicKey('4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R'),
          FTT: new PublicKey('AGFEad2et2ZJif9jaGpdMixQqvW5i81aBdvKe7PHNfz3'),
          HBB: new PublicKey('HBB111SCo9jkCejsZfz8Ec8nH7T6THF8KEKSnvwT6XK6'),
          WSOL: new PublicKey('So11111111111111111111111111111111111111112'),
          MSOL: new PublicKey('mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So'),
        },
        collateralVaultsAuthority: new PublicKey('HZYHFagpyCqXuQjrSCN2jWrMHTVHPf9VWP79UGyvo95L'),
        collateralVault: {
          SOL: new PublicKey('68yQyYj4YymoiQ644LVyRdvWLpw9xsjp67kmZhLMGnQp'),
          ETH: new PublicKey('HWTdcMDUF2UJqmD39dix2ATbKTJYQVhpPyoHgJTthpEz'),
          BTC: new PublicKey('4EhioLhAgbX18VGmX5Qf7qBGB7HEDQELcBxEGTk6c38G'),
          SRM: new PublicKey('5p8atdH8vX1mKgA38DPCC6tWGuGCiMRmZqFg1KrsECTW'),
          RAY: new PublicKey('BcmAzZsn6uZL8Hsv4ZWidXFshPS5oSyBXetf2ZD2i5i7'),
          FTT: new PublicKey('5EpCf866wXEgPFyTstgmJZJK1TPZJ3d1Jcvi2mT6EXFj'),
          MSOL: new PublicKey('9FWk5tni1jv6muvuUeh2JJdcfGcuzShkh2Ashzr6QWch'),
        },
        redemptionsQueue: new PublicKey('7PE2Ac3BM7pj7eoYRqBDzbKehwcfWQf8RCeFUy6AmVT5'),
        redemptionCandidatesQueue: new PublicKey('9MDc3EZR9cZvhB2sprPh2Tz6n1p9NNJMXiP7ZWPNSbpN'),
        liquidationsQueue: new PublicKey('3nBiYphUBFv8RGHNZYsTEFQthYnHBDoFJrSXfL59dNu7'),
        borrowingMarketState: new PublicKey('YSp9bJpQom2HA7VThxYZX9pNwrcBH88NBcBNWs5yskR'),
        borrowingVaultsV2: new PublicKey('EUEukBTF2X4gtFzkAJaqBcxUVbrSLn2yxLDBuKJj5JoZ'),
        stabilityPoolState: new PublicKey('245U3MMJ57YDGUSYRQxsJurqUhnXK4mjjvavbrvSn3uh'),
        epochToScaleToSum: new PublicKey('HDZR8Knvh9ETmCFGig3ocmzxijVgSrtPYSNCFoj2muRf'),
        stablecoinStabilityPoolVault: new PublicKey('GE6PqKhREVLRTGZs7rV5mJ2L3FAcj2fqohWCzTjhCTdQ'),
        stabilityVaults: new PublicKey('DytfDS9DqvCe86TGcFusmGpQgWa2889dcn34qZ1M5UYQ'),
        stablecoinStabilityPoolVaultAuthority: new PublicKey('CpNGqip6qTSmYEa3ANtPdHUzgD6HSWKeDE8ovNUtQLQy'),
        liquidationRewardsVaultSol: new PublicKey('gbbqSXucKBYcfvaPR2DevzExFpstvE6Ypu1Nfs3HGB1'),
        liquidationRewardsVaultSrm: new PublicKey('2hwuFn23CqZdsQ2hCbjRHLuNeHra1zfk6qAurTjEL133'),
        liquidationRewardsVaultEth: new PublicKey('CyfPwr1uV3pkhQtCdCpLvzzVvAngXYqq4KSAvkVxqhga'),
        liquidationRewardsVaultBtc: new PublicKey('EQxPELJWp87ziPFm6cnWEqqbGuzwbfbE4ejXgoBKfdJg'),
        liquidationRewardsVaultRay: new PublicKey('3aqwFikJ1sLwebd3GDdPxFPnzTaPVEQp9J7R3stNfPHL'),
        liquidationRewardsVaultFtt: new PublicKey('77PfF5Nqx8r3ZwLccxhyW9jmEYNLKrYTa4ruB8uAXQSA'),
        liquidationRewardsVaultMsol: new PublicKey('5xvgjTUyR5yBEW6oKYTeTd6BaQobGt7ECLPUearAxjBA'),
        liquidationRewardsVaultAuthority: new PublicKey('2LhXfDs64j5jVXNKa1qapMCMAZ9LXvKwHxpkp55wFh54'),
        borrowingVaults: new PublicKey('GNSn4pfNqxq1NeBoM3DSLrTp2oaQqptRy7MuaNpzA5fA'),
        globalConfig: new PublicKey('8HuhMF7ppoYdPD9fAdn9d9ZU1rL4ipty6CJEcZ5F17o1'),
        oracleMappings: new PublicKey('GKZhrh5reKiRkxkvQiFPT6ACtnVDB16DWbF1vfva5iod'),
        stakingPoolState: new PublicKey('5YPVVnBGYhribwt4UHCRWNKRs28DdgUgXQj8VrWikBP7'),
        borrowingFeesAccount: new PublicKey('8PJGWbSjY9C45yq9Jyr2GjMANQ3CuVajMGZwkgnNSBRF'),
        borrowingFeesVaultAuthority: new PublicKey('EDmzrjSjeS36dcYRzHuzrPxRnjZgfQoudfGGUA9mXyZr'),
        stakingVault: new PublicKey('9ixberQazk45T5XN3fZPakK2dWBdgJ6dyJeykxw3FN4K'),
        treasuryVault: new PublicKey('G1apbPBr9GdBWaXY4ejMu8b3NnmByvKT3BTvzEdKCgq6'),
        burningVault: new PublicKey('Ec7EqbEzbY5EW18E3scKoqYMYw6EGxySrRDpmCrs95e3'),
        burningVaultAuthority: new PublicKey('9wyZzZ77wg9JR25yiJi4333Fb2t3jiEVUGHoDZS6cdrE'),
        USDC: new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'),
        pyth: {
          solProductInfo: new PublicKey('ALP8SdU9oARYVLgLR7LrqMNCYBnhtnQz1cj6bwgwQmgj'),
          solPriceInfo: new PublicKey('H6ARHf6YXhGYeQfUzQNGk6rDNnLBQKrenN712K4AQJEG'),
          ethProductInfo: new PublicKey('EMkxjGC1CQ7JLiutDbfYb7UKb3zm9SJcUmr1YicBsdpZ'),
          ethPriceInfo: new PublicKey('JBu1AL4obBcCMqKBBxhpWCNUt136ijcuMZLFvTP7iWdB'),
          btcProductInfo: new PublicKey('4aDoSXJ5o3AuvL7QFeR6h44jALQfTmUUCTVGDD6aoJTM'),
          btcPriceInfo: new PublicKey('GVXRSBjFk6e6J3NbVPXohDJetcTjaeeuykUpbQF8UoMU'),
          srmProductInfo: new PublicKey('6T1eJbKWyhZXEjmuBej9gPk3SRTagzrEQovCSwAWD57P'),
          srmPriceInfo: new PublicKey('3NBReDRTLKMQEKiLD5tGcx4kXbTf88b7f2xLS9UuGjym'),
          rayProductInfo: new PublicKey('EjtaES3pbMCaNrVFtZ5sT36WPXAnARZxCFsoEr2hsUKJ'),
          rayPriceInfo: new PublicKey('AnLf8tVYCM816gmBjiy8n53eXKKEDydT5piYjjQDPgTB'),
          fttProductInfo: new PublicKey('E7ymZgACaSd1fYLf2V7WkAmFkpRiWfAjm49R7bceny9K'),
          fttPriceInfo: new PublicKey('8JPJJkmDScpcNmBRKGZuPuG2GYAveQgP3t5gFuMymwvF'),
          msolProductInfo: new PublicKey('BS2iAqT67j8hA9Jji4B8UpL3Nfw9kwPfU5s4qeaf1e7r'),
          msolPriceInfo: new PublicKey('E4v1BBgoso9s64TQvmyownAVJbhbEPGyzA3qn4n46qj9'),
        },
        serumMarkets: {
          SOL: {
            marketAddress: new PublicKey('9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT'),
            requestQueue: new PublicKey('AZG3tFCFtiCqEwyardENBQNpHqxgzbMw8uKeZEw2nRG5'),
            eventQueue: new PublicKey('5KKsLVU6TcbVDK4BS6K1DGDxnh4Q9xjYJ8XaDCG5t8ht'),
            baseVault: new PublicKey('36c6YqAwyGKQG66XEp2dJc5JqjaBNv7sVghEtJv4c7u6'),
            quoteVault: new PublicKey('8CFo8bL8mZQK8abbFyypFMwEDd8tVJjHTTojMLgQTUSZ'),
            vaultOwner: new PublicKey('F8Vyqk3unwxkXukZFQeYyGmFfTG3CAX4v24iyrjEYBJV'),
            bidsAddress: new PublicKey('14ivtgssEBoBjuZJtSAPKYgpUK7DmnSwuPMqJoVTSgKJ'),
            asksAddress: new PublicKey('CEQdAFKdycHugujQg9k2wbmxjcpdYZyVLfV9WerTnafJ'),
          },
          ETH: {
            marketAddress: new PublicKey('8Gmi2HhZmwQPVdCwzS7CM66MGstMXPcTVHA7jF19cLZz'),
            requestQueue: new PublicKey('3ZSxZjD8o8JjPX1HVmQ59ED89R3uKNviRDCEmxCgv9dp'),
            eventQueue: new PublicKey('3z4QQPFdgNSxazqEAzmZD5C5tJWepczimVqWak2ZPY8v'),
            baseVault: new PublicKey('8cCoWNtgCL7pMapGZ6XQ6NSyD1KC9cosUEs4QgeVq49d'),
            quoteVault: new PublicKey('C7KrymKrLWhCsSjFaUquXU3SYRmgYLRmMjQ4dyQeFiGE'),
            vaultOwner: new PublicKey('FG3z1H2BBsf5ekEAxSc1K6DERuAuiXpSdUGkYecQrP5v'),
            bidsAddress: new PublicKey('3nXzH1gYKM1FKdSLHM7GCRG76mhKwyDjwinJxAg8jjx6'),
            asksAddress: new PublicKey('b3L5dvehk48X4mDoKzZUZKA4nXGpPAMFkYxHZmsZ98n'),
          },
          BTC: {
            marketAddress: new PublicKey('A8YFbxQYFVqKZaoYJLLUVcQiWP7G2MeEgW5wsAQgMvFw'),
            requestQueue: new PublicKey('H6UaUrNVELJgTqao1CNL4252kShLKSfwoboT8tF7HNtB'),
            eventQueue: new PublicKey('6NQqaa48SnBBJZt9HyVPngcZFW81JfDv9EjRX2M4WkbP'),
            baseVault: new PublicKey('GZ1YSupuUq9kB28kX9t1j9qCpN67AMMwn4Q72BzeSpfR'),
            quoteVault: new PublicKey('7sP9fug8rqZFLbXoEj8DETF81KasaRA1fr6jQb6ScKc5'),
            vaultOwner: new PublicKey('GBWgHXLf1fX4J1p5fAkQoEbnjpgjxUtr4mrVgtj9wW8a'),
            bidsAddress: new PublicKey('6wLt7CX1zZdFpa6uGJJpZfzWvG6W9rxXjquJDYiFwf9K'),
            asksAddress: new PublicKey('6EyVXMMA58Nf6MScqeLpw1jS12RCpry23u9VMfy8b65Y'),
          },
          SRM: {
            marketAddress: new PublicKey('ByRys5tuUWDgL73G8JBAEfkdFf8JWBzPBDHsBVQ5vbQA'),
            requestQueue: new PublicKey('Hr8Z93aWe4hhJbC5i7YTsPaSToziVh3vyMfv9GRqKFCh'),
            eventQueue: new PublicKey('6o44a9xdzKKDNY7Ff2Qb129mktWbsCT4vKJcg2uk41uy'),
            baseVault: new PublicKey('Ecfy8et9Mft9Dkavnuh4mzHMa2KWYUbBTA5oDZNoWu84'),
            quoteVault: new PublicKey('hUgoKy5wjeFbZrXDW4ecr42T4F5Z1Tos31g68s5EHbP'),
            vaultOwner: new PublicKey('GVV4ZT9pccwy9d17STafFDuiSqFbXuRTdvKQ1zJX6ttX'),
            bidsAddress: new PublicKey('AuL9JzRJ55MdqzubK4EutJgAumtkuFcRVuPUvTX39pN8'),
            asksAddress: new PublicKey('8Lx9U9wdE3afdqih1mCAXy3unJDfzSaXFqAvoLMjhwoD'),
          },
          RAY: {
            marketAddress: new PublicKey('2xiv8A5xrJ7RnGdxXB42uFEkYHJjszEhaJyKKt4WaLep'),
            requestQueue: new PublicKey('39mE6bYktM1XAKKmB6WN971X3Sa1yGkHxtCTWMkVrwN2'),
            eventQueue: new PublicKey('H9dZt8kvz1Fe5FyRisb77KcYTaN8LEbuVAfJSnAaEABz'),
            baseVault: new PublicKey('GGcdamvNDYFhAXr93DWyJ8QmwawUHLCyRqWL3KngtLRa'),
            quoteVault: new PublicKey('22jHt5WmosAykp3LPGSAKgY45p7VGh4DFWSwp21SWBVe'),
            vaultOwner: new PublicKey('FmhXe9uG6zun49p222xt3nG1rBAkWvzVz7dxERQ6ouGw'),
            bidsAddress: new PublicKey('Hf84mYadE1VqSvVWAvCWc9wqLXak4RwXiPb4A91EAUn5'),
            asksAddress: new PublicKey('DC1HsWWRCXVg3wk2NndS5LTbce3axwUwUZH1RgnV4oDN'),
          },
          FTT: {
            marketAddress: new PublicKey('2Pbh1CvRVku1TgewMfycemghf6sU9EyuFDcNXqvRmSxc'),
            requestQueue: new PublicKey('2ncWnY9QuCdNAX4gLutkNoKr9R1owDY1bhLLV1yH8Ukf'),
            eventQueue: new PublicKey('2XHxua6ZaPKpCGUNvSvTwc9teJBmexp8iMWCLu4mtzGb'),
            baseVault: new PublicKey('4LXjM6rptNvhBZTcWk4AL49oF4oA8AH7D4CV6z7tmpX3'),
            quoteVault: new PublicKey('2ycZAqQ3YNPfBZnKTbz2FqPiV7fmTQpzF95vjMUekP5z'),
            vaultOwner: new PublicKey('B5b9ddFHrjndUieLAKkyzB1xmq8sNqGGZPmbyYWPzCyu'),
            bidsAddress: new PublicKey('9HTDV2r7cQBUKL3fgcJZCUfmJsKA9qCP7nZAXyoyaQou'),
            asksAddress: new PublicKey('EpnUJCMCQNZi45nCBoNs6Bugy67Kj3bCSTLYPfz6jkYH'),
          },
          MSOL: {
            marketAddress: new PublicKey('6oGsL2puUgySccKzn9XA9afqF217LfxP5ocq4B3LWsjy'),
            requestQueue: new PublicKey('EHUoDPVVKR5Udp4EZPb4bsHZte5EEHc1PPTPXBgJEPEK'),
            eventQueue: new PublicKey('BC8Tdzz7rwvuYkJWKnPnyguva27PQP5DTxosHVQrEzg9'),
            baseVault: new PublicKey('2y3BtF5oRBpLwdoaGjLkfmT3FY3YbZCKPbA9zvvx8Pz7'),
            quoteVault: new PublicKey('6w5hF2hceQRZbaxjPJutiWSPAFWDkp3YbY2Aq3RpCSKe'),
            vaultOwner: new PublicKey('9dEVMESKXcMQNndoPc5ji9iTeDJ9GfToboy8prkZeT96'),
            bidsAddress: new PublicKey('8qyWhEcpuvEsdCmY1kvEnkTfgGeWHmi73Mta5jgWDTuT'),
            asksAddress: new PublicKey('PPnJy6No31U45SVSjWTr45R8Q73X6bNHfxdFqr2vMq3'),
          },
        },
        saber: {
          stablecoinSwap: new PublicKey('MARpDPs5A7XiyCWPNH8GsMWPLxmwNn9SBmKvPa9LzgA'),
        },
      },
    },
  },
  {
    cluster: 'testnet',
    kamino: {
      mints: {
        usdt: new PublicKey('AcU8CfJiLEBn1x7Cgx8atX6DdebmdQtNSsJBkQyf6Q4L'),
        usdh: new PublicKey('kfZGSThBdZbZY6cDSHP7NmCWa6D2hFc5kjBuGHREzZ3'),
        usdc: new PublicKey('HEzfH7PCNSCU92zdk3iaKG4E9hQTErfgVGvqgywEvPzu'),
        stsol: new PublicKey('ESba8sT1R7WPiE3weBU1u6UqEmXRuM8Rs1LLvXayEizf'),
        msol: new PublicKey('2wMQTELEgEcK7V3gwZBH58WvGcRZsyaWNpebqyFugGKe'),
        sol: new PublicKey('So11111111111111111111111111111111111111112'),
        solMsol: new PublicKey('7hUuLSz41MAJTASQTr6VnrRzZ5oyf2DNmLcpTHqZVyro'),
        solStsol: new PublicKey('2MpRMgTDALUqa42DNAgqM6X8TAqRSojhvtmgM15Dei1B'),
        usdcUsdt: new PublicKey('Fk3UsY9LtbKyqU6hwuM86Rxq3HTokDKcieJjpmbn1CRn'),
        usdhUsdc: new PublicKey('HYszS8Y59xwAtmZZ5ja2XjLpvc8eHmmzc1craEdRzfMb'),
        usdhUsdt: new PublicKey('6xAFTAV3V7vbWhPgmbUrSndpE85MHNu1tUyRecX9JHS7'),
      },
    },
    scope: {
      oracleMappings: new PublicKey('Chpu5ZgfWX5ZzVpUx9Xvv4WPM75Xd7zPJNDPsFnCpLpk'),
      oraclePrices: new PublicKey('3NJYftD5sjVfxSnUdZ1wVML8f3aC6mp1CXCL6L7TnU8C'),
      programId: new PublicKey('HFn8GnPADiny6XqUoWE8uRPPxb29ikn4yTuPa9MF2fWJ'),
      configurationAccount: new PublicKey('AdTiP7QyjUyv6crF4H8z7fxJKU7Z5eCAGvJN1Y55cXxb'),
    },
    borrowing: {
      programId: new PublicKey('6JbR96VWfG5P2eFCBPRDFenw6poqGP7RoA4vqx5tNBJf'),
      accounts: {
        stablecoinMint: new PublicKey('6w7WUkBpfZwejqesCMgXUTdbtZdGThu1882BNiLzTwc8'),
        stablecoinMintAuthority: new PublicKey('2okhqAYAsxcDLWxaKdAJ38G2By9HwDdhTmTmY84UftHP'),
        borrowingVaultsV2: new PublicKey('BHgw9kZcK6LVSadiqUZYBxe8rCzTcDq1dxsJcspLmWPX'),
        mint: {
          ETH: new PublicKey('htC6eTvy3pUSi2wCurvczo5ZyX9vBBzvPMU4PFxr3TP'),
          BTC: new PublicKey('HAKEyaEmSUjMFU4qwXd6mf2Sj5Zas5667w6rcuPBuPst'),
          SRM: new PublicKey('GosaYdcVQSAvBjYhfgbHfT1k9LcHZBK9uGUV67J8BDT8'),
          RAY: new PublicKey('FG2vjWXXBDYgqj5rZ5VnmTL784KmQaDBRivKJGz3cpTs'),
          FTT: new PublicKey('AHgeW347LLVBSU7upSUCnffgSH1ZpuQAg5b529CRZ3pp'),
          HBB: new PublicKey('HBB111SCo9jkCejsZfz8Ec8nH7T6THF8KEKSnvwT6XK6'),
          MSOL: undefined,
          WSOL: undefined,
        },
        collateralVault: {
          SOL: {
            pool: new PublicKey('J8ebxv2aEcTUYHh9Jd7EfE7oZgnt1xiVGN6LeGKURsuw'),
            authority: new PublicKey('CFCHz5e3dkTzcWMQjWkwQJEXPyQmM4GGzjj9SunAoYap'),
          },
          ETH: {
            pool: new PublicKey('76JSiWhGd84BxrjBJjdadRRCU2nzdCmuPDRFQk1E3rEZ'),
            authority: new PublicKey('B3ZxVGRXBpAvjr4KxnwSsCAzTein8ymdKrPkBssFYW9G'),
          },
          BTC: {
            pool: new PublicKey('HFsKaZtpehaBHMZDmRSUzsLD1y3j2h2zkTUB2Fzm6v6r'),
            authority: new PublicKey('GXtuRXC3jfavm6wjqcWAcnTHzJ5RzK2CFZjQfpuG11Lc'),
          },
          SRM: {
            pool: new PublicKey('CZTGDLmYYcaLAqeM3jmSa9EKqfGFkHfutfnKwoK3RDuU'),
            authority: new PublicKey('CFCHz5e3dkTzcWMQjWkwQJEXPyQmM4GGzjj9SunAoYap'),
          },
          RAY: {
            pool: new PublicKey('BrraFxuaiX6edVcjehczEH8WzBbDPXG9Vq4zFtR31oHs'),
            authority: new PublicKey('68HRjkSQitz9LkCTDnYBV7dLFwpKsaSJ3a5Quide3qph'),
          },
          FTT: {
            pool: new PublicKey('8mh7DaHYZCKofNiDV27YebsC3uZipbvvTcNmhBYZHF8y'),
            authority: new PublicKey('5MdMd77qdokNTek87biwGnnLKQJusBeb7gtih6YWZnqt'),
          },
          MSOL: undefined,
        },
        borrowingMarketState: new PublicKey('6rkGfMoG6hvWmzJzdbocgwyGfDwXDyvHsqU7UpyzS2pq'),
        stabilityPoolState: new PublicKey('5y7rqAh9ffVSJu6wH73QPXskcqLZmogirw8CW7Fer8cx'),
        epochToScaleToSum: new PublicKey('tTzux8myzrDmWoeAyk5KRUrjWYGqEJgHfJqohxDwj8y'),
        stablecoinStabilityPoolVault: new PublicKey('835fwEqk2VaHBDAmG3z18HWorqwMURsPsmPEeewk35FZ'),
        stabilityVaults: new PublicKey('ANSNagYiiic2uR2CUNRf7PFupUZXW1tefkPBTp16yddh'),
        stablecoinStabilityPoolVaultAuthority: new PublicKey('7bChuDYNHqpGpWMvLQ7YTrvGiP3AkQjSwXeZq75MrtXX'),
        liquidationRewardsVaultSol: new PublicKey('9ELnAzgZ1tmYHSXGxuG1Cyi5MwwjbmgHrumcWeY4qAiw'),
        liquidationRewardsVaultSrm: new PublicKey('x1t7r6PUdEFXQ1a1UXXTVeNxSbYTbPRKUvmKXUiTcHW'),
        liquidationRewardsVaultEth: new PublicKey('A3d1soF54pLdZD7EzWtEikrp4okKnqw6eDzatp6C3F3S'),
        liquidationRewardsVaultBtc: new PublicKey('6RJemzXE6dzmPofMTnbDjwwBLVtFYtoQc8y7JeTRuxM'),
        liquidationRewardsVaultRay: new PublicKey('9WPCCP1BFrnswb5ARYHp3YdUXzpjhoRk5uQLHqXBgdLP'),
        liquidationsQueue: new PublicKey('F3ynJaZ2dHZQAP6zkrr7yGaPrRh2v1wcRNwGhX1ZVZDx'),

        liquidationRewardsVaultFtt: new PublicKey('EYSuqHG8NqMV8pGu3XP1Nj4xsKmwUL939Yk53YEuyAYi'),
        borrowingVaults: new PublicKey('2wNHsWtnSt5UdLJbwrA5XNa9FUWtScPc84MHFZpaDwva'),
        stakingPoolState: new PublicKey('FEXNKKnT1G19eR69ffMzHvrx7PeLjRYdUN9vwk2DDzkE'),
        borrowingFeesAccount: new PublicKey('BKG1NpWMT1dHSswS5U95aMN4dCtmEvQ3MgJ99tSDDFio'),
        pyth: undefined,
        serumMarkets: undefined,
        redemptionCandidatesQueue: undefined,
        USDC: undefined,
        redemptionsQueue: undefined,
        liquidationRewardsVaultMsol: undefined,
        liquidationRewardsVaultAuthority: undefined,
        globalConfig: undefined,
        oracleMappings: undefined,
        borrowingFeesVaultAuthority: undefined,
        stakingVault: undefined,
        treasuryVault: undefined,
        burningVault: undefined,
        burningVaultAuthority: undefined,
        collateralVaultsAuthority: undefined,
        hbbMintAuthority: undefined,
        saber: {
          stablecoinSwap: new PublicKey('MARpDPs5A7XiyCWPNH8GsMWPLxmwNn9SBmKvPa9LzgA'),
        },
      },
    },
  },
  {
    cluster: 'devnet',
    kamino: {
      mints: {
        usdt: new PublicKey('AcU8CfJiLEBn1x7Cgx8atX6DdebmdQtNSsJBkQyf6Q4L'),
        usdh: new PublicKey('kfZGSThBdZbZY6cDSHP7NmCWa6D2hFc5kjBuGHREzZ3'),
        usdc: new PublicKey('HEzfH7PCNSCU92zdk3iaKG4E9hQTErfgVGvqgywEvPzu'),
        stsol: new PublicKey('ESba8sT1R7WPiE3weBU1u6UqEmXRuM8Rs1LLvXayEizf'),
        msol: new PublicKey('2wMQTELEgEcK7V3gwZBH58WvGcRZsyaWNpebqyFugGKe'),
        sol: new PublicKey('So11111111111111111111111111111111111111112'),
        solMsol: new PublicKey('7hUuLSz41MAJTASQTr6VnrRzZ5oyf2DNmLcpTHqZVyro'),
        solStsol: new PublicKey('2MpRMgTDALUqa42DNAgqM6X8TAqRSojhvtmgM15Dei1B'),
        usdcUsdt: new PublicKey('Fk3UsY9LtbKyqU6hwuM86Rxq3HTokDKcieJjpmbn1CRn'),
        usdhUsdc: new PublicKey('HYszS8Y59xwAtmZZ5ja2XjLpvc8eHmmzc1craEdRzfMb'),
        usdhUsdt: new PublicKey('6xAFTAV3V7vbWhPgmbUrSndpE85MHNu1tUyRecX9JHS7'),
      },
    },
    scope: {
      oracleMappings: new PublicKey('4PoKkcsQakSMovMWh127gviWPpA6wGyY8uZWavccXAGE'),
      oraclePrices: new PublicKey('Aprk2sZNvxZNUpgq2WuS3VNkbxh35aCqJd1GbtBZzkG5'),
      programId: new PublicKey('3Vw8Ngkh1MVJTPHthmUbmU2XKtFEkjYvJzMqrv2rh9yX'),
      configurationAccount: new PublicKey('qAN1wkxEzBg7AzeLC4sGT61czYvDiotZTMKojVL2o2E'),
    },
    borrowing: {
      programId: new PublicKey('m9P5MBXVg33N5cWuHPd4YctGhKy3p6iDdHr7Ro2YRgr'),
      accounts: {
        stablecoinMint: new PublicKey('HWzkNyXynnC3mAZAL4yKZNvWs3SwS9eBVKdzmKcxYHSH'),
        stablecoinMintAuthority: new PublicKey('Bv3oYDiEfetCx5J2tBDDTefjRc1RirtjukEfHaRBoX71'),
        hbbMintAuthority: new PublicKey('FeVZfsKhu4LJQNSDvq1RHwp5dNhFD3PFW1kBAk3PAYhw'),
        mint: {
          WSOL: new PublicKey('So11111111111111111111111111111111111111112'),
          ETH: new PublicKey('2DVyKwW17MxDXaLhWpWXtbVa64JBwaHmLJ1txXNJgRGi'),
          BTC: new PublicKey('6cA8Y9Jm2jW2rvUcpBHC9kUjctw9dMF3gPfWZd5bcr57'),
          SRM: new PublicKey('314VQ6r5m3sxdfB8cWJBS8MrAb5nVY5PvpcR7jN1PnY2'),
          RAY: new PublicKey('FDYnqkgmF9t8o4QxA7YYL2wSLfun2kXXgA6auQBzzXLU'),
          FTT: new PublicKey('7DmsbJXUcVwNmj84Cqd91KrEzJyLKGPHdKTqKTwHwsHE'),
          HBB: new PublicKey('GnzBpWxvN75JXxKndPwJ63ABdKDACMDWTC5iTUqGzSsD'),
          MSOL: new PublicKey('mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So'),
        },
        collateralVaultsAuthority: new PublicKey('5t8jZ1T6cR79vEu5Vo1Jc6Q3RaYtLsNJdPTLLu4z9vX3'),
        collateralVault: {
          SOL: new PublicKey('ZRJEmigJ8Hjs2NyTmyHkvas2HZmMKrrNAwNnJ4dFgZQ'),
          ETH: new PublicKey('DAaiG32meXcHwpxJgcAqTfaMMNhW3yKLNeJdNyaiRt2G'),
          BTC: new PublicKey('9A9ZpnXcnDZLHkHt8Fcro3XLgqGNoVJhx7ndo74MKn4B'),
          SRM: new PublicKey('84tA2z64nuBDpKN9Vm75HGDbqix51RyftDWrNrY3TfrF'),
          RAY: new PublicKey('DY3UAwAtiJXwdHjrToKzDHci5fLc2Spo3cSav5Ncsymz'),
          FTT: new PublicKey('6Dw7ofQLGHcdaMPtYBY5d37ABEtxdqk3omy2eWLzyV17'),
          MSOL: new PublicKey('9rN5H8SxGMfaabwHLg4x7xCSKpvPH218VGT4tGHmjMdH'),
        },
        redemptionsQueue: new PublicKey('4jfza6qg6eSTnQuXGim6AmD96BJ38dCeej9ieeXLfsAW'),
        redemptionCandidatesQueue: new PublicKey('AjqLny58i2sRKuX7Cq6iVunCXWZBsSuD2xQ1KHS1z2xN'),
        liquidationsQueue: new PublicKey('66QZM6UAKFpUeKWRe5spag5JEfT4ycJ1UtSzeffTiQJK'),
        borrowingMarketState: new PublicKey('FqkHHpETrpfgcA5SeH7PKKFDLGWM4tM7ZV31HfutTXNV'),
        stabilityPoolState: new PublicKey('FB1e3ACdWSgKVDaVp7YRWB64JgFrUNPrxm6ukKDjjKg'),
        epochToScaleToSum: new PublicKey('FPUTB5KsZQhPrJS6QmUzgAErYcfHBcyVwRSQcvCLzeVi'),
        borrowingVaultsV2: new PublicKey('BHgw9kZcK6LVSadiqUZYBxe8rCzTcDq1dxsJcspLmWPX'),
        stablecoinStabilityPoolVault: new PublicKey('EdSUZ9WtLj7QFrJ5wNPFZGhrf8JP1nofskpHJ8Jotgt3'),
        stabilityVaults: new PublicKey('CSjeLjho28HxsWhYqzh4XqbDAoYTo63d2zn34BBRFkm6'),
        stablecoinStabilityPoolVaultAuthority: new PublicKey('46ephmWbPP6pZQU8NR123NX1unJ6eYJSK3pf8pmYA8o6'),
        liquidationRewardsVaultSol: new PublicKey('GdfNFLiFAxFfUbns6JaWheChqbHByBgW9EmqykEMisdm'),
        liquidationRewardsVaultSrm: new PublicKey('9wFvXWJdrSyzGaKkZYhiWPmG3qKeAtemcQs5sgR7KdTV'),
        liquidationRewardsVaultEth: new PublicKey('H6U9myYfmYHvz1BQBDcARinaFFVSbeHV4r9VJPiUJBxV'),
        liquidationRewardsVaultBtc: new PublicKey('9Xm3RaKVgon2ViU3QwvgPE5Gcd5mTRwdzVoRQt56Pkbt'),
        liquidationRewardsVaultRay: new PublicKey('2HSSye9cZnE3VS84M6z9LnobcdeYukUpZm23n3KiBve2'),
        liquidationRewardsVaultFtt: new PublicKey('BTNN8XfsH3GyyUpBZUy1gKPrYhW4ng1aaiKQy4kkQtS9'),
        liquidationRewardsVaultMsol: new PublicKey('DjpZNFotV5XgWgt4W7hh7TJpqgES4w4Nyh2x96sAJHYa'),
        liquidationRewardsVaultAuthority: new PublicKey('83NPhEayosoeucxJGi8EPpar1oDBzu16wa8ttTUc7bJK'),
        borrowingVaults: new PublicKey('2rVBBq4gbWgNCpaDAw6XScwaKxnXEEeXSXFCz5Dz8dSm'),
        globalConfig: new PublicKey('4tKUbxbw9rh4FkxdSG5XgmHjGa2ygJeBdRGGnVuBYCj3'),
        oracleMappings: new PublicKey('5MkiLwSR4qhhLrnfio9tmre9oepjUkf6FXwsD8Fne1nT'),
        stakingPoolState: new PublicKey('ESmugrx5Toe58tr5mXWeEFVG36ifmV39QXTohekw5Bc5'),
        borrowingFeesAccount: new PublicKey('CsNHgkVrHzgjbg53YdZpXqg7SzFzMDDomXGTAJJ8Xyo1'),
        borrowingFeesVaultAuthority: new PublicKey('6TsuFvmMQHNCbBfkp9UBSJmSb16XvFBAp9WwSkTGHXZX'),
        stakingVault: new PublicKey('4GT3ESGXLhYZGidYm2UCzyhvhhAjrFxs8pSgCakFd72h'),
        treasuryVault: new PublicKey('BJBW7y4kFNidyzJQM6SAwceobzSVyBjrPi2FGCPR9wvv'),
        burningVault: new PublicKey('F9ZFxRgTZQPgRRnxG8CsQ8PjoqhrQkFSCojDbCyzjFeA'),
        burningVaultAuthority: new PublicKey('FtUEyCRySPDMgZZYQTdVnz7gxM7f4LeZyKPVaSNME4gb'),
        pyth: {
          solProductInfo: new PublicKey('3Mnn2fX6rQyUsyELYms1sBJyChWofzSNRoqYzvgMVz5E'),
          solPriceInfo: new PublicKey('J83w4HKfqxwcq3BEMMkPFSppX3gqekLyLJBexebFVkix'),
          ethProductInfo: new PublicKey('2ciUuGZiee5macAMeQ7bHGTJtwcYTgnt6jdmQnnKZrfu'),
          ethPriceInfo: new PublicKey('EdVCmQ9FSPcVe5YySXDPCRmc8aDQLKJ9xvYBMZPie1Vw'),
          btcProductInfo: new PublicKey('3m1y5h2uv7EQL3KaJZehvAJa4yDNvgc5yAdL9KPMKwvk'),
          btcPriceInfo: new PublicKey('HovQMDrbAgAYPCmHVSrezcSmkMtXSSUsLDFANExrZh2J'),
          srmProductInfo: new PublicKey('6MEwdxe4g1NeAF9u6KDG14anJpFsVEa2cvr5H6iriFZ8'),
          srmPriceInfo: new PublicKey('992moaMQKs32GKZ9dxi8keyM2bUmbrwBZpK4p2K6X5Vs'),
          rayProductInfo: new PublicKey('3BtxtRxitVDcsd7pPUWUnFm9KvmNDy9usS4gE6pUFhpH'),
          rayPriceInfo: new PublicKey('EhgAdTrgxi4ZoVZLQx1n93vULucPpiFi2BQtz9RJr1y6'),
          fttProductInfo: new PublicKey('63VWd2FVbukVozZ1okHt8wVMq7enAYFXYnmp2DUQtBBJ'),
          fttPriceInfo: new PublicKey('6vivTRs5ZPeeXbjo7dfburfaYDWoXjBtdtuYgQRuGfu'),
          msolProductInfo: new PublicKey('os3is9HtWPHW4EXpGAkdr2prdWVs2pS8qKtf2ZYJdBw'),
          msolPriceInfo: new PublicKey('9a6RNx3tCu1TSs6TBSfV2XRXEPEZXQ6WB7jRojZRvyeZ'),
        },
        serumMarkets: {
          SOL: {
            marketAddress: new PublicKey('BbNNvJ9Ayh23qdaG7vvn8y4FGkBiDipCcFa4L6sy6qkH'),
            requestQueue: new PublicKey('8jWfsdCT1tsJSBxEtVnD695Bvt6j1vTuXkFjFKXWpzxm'),
            eventQueue: new PublicKey('82SBwWDx9gcttA68fq56Cid3SPujFX3ZMaTRBW8Nncf4'),
            baseVault: new PublicKey('6aJXaJqEEA8WCoXgJgMevR7Mtg4k2kq7Bv7ZFw7UmgG7'),
            quoteVault: new PublicKey('89spP5pkVQyEBBjuDQLPyHQc5JCbjHxLmqDht2PgMwj8'),
            vaultOwner: new PublicKey('AJL9Zf7Jx6XTfQTzUhL8FATLfbHRHJ799U4ysKt2BL4k'),
            bidsAddress: new PublicKey('8RhfhGjmAHYpWa44Y3JY5aCacFpyhCJWGMC7SLzRFQbr'),
            asksAddress: new PublicKey('2wMQj33zSng8pcznYZMfGJPwNFFLH7k6DgRBcBHdVdKp'),
          },
          ETH: {
            marketAddress: new PublicKey('AohVcYC9UBWe6zuf9dV3okbK4YTWwTPgQtVSYgtGNk2f'),
            requestQueue: new PublicKey('3x11hXJx6FxMYfvzmmFUFiPx25wVkiEaSAsQ6yjrxEx7'),
            eventQueue: new PublicKey('2nA72kf54iPJsL9Ar5SC5Q6FXUQfz7RfXyUVHQp183TM'),
            baseVault: new PublicKey('4ZhvPAcEUBbbYM4WVe6oMCEyYE1GEBmMhVMPeKibdSrL'),
            quoteVault: new PublicKey('An8Lkd9JjDn1dJHWbijwJEWuf5wFTLkZ6ABqxU3uTS85'),
            vaultOwner: new PublicKey('2WBeH92fiSzUxTRpoD9ECLdpFPZZVmyW3SP9uWUtrT9U'),
            bidsAddress: new PublicKey('EvxjBDnJrGH6x5urDBHcCP4awEy8xgqBnXFyEgyQfgSa'),
            asksAddress: new PublicKey('7iXouzTk7mxDToqPeog5ZiimU7ZTZE2ebC2ojFmfiGuU'),
          },
          BTC: {
            marketAddress: new PublicKey('H3Kc3iFCjXHxK7igtYL8AYEJWUEcu6CwWrmJLuEaV5ur'),
            requestQueue: new PublicKey('EK5LtxC3AuNAHGqBvpCY4hE76v8TxvvV4qJB2tm9zeDK'),
            eventQueue: new PublicKey('59aR7wfrHgRMSqYMR1mds7MudJggka688e5ibH14Vo5g'),
            baseVault: new PublicKey('MAuEtSCnfXfEovBHTCPBDx1FUak2d8NripHAN2MnieY'),
            quoteVault: new PublicKey('2wSSHX1hhcUBPkkQ3kXL6k3N6zd8Us7eNa4E4KSho6qB'),
            vaultOwner: new PublicKey('2HP6SYHycgByXSNdTj3Pf1dwHdG9u1mydF8fHtbjx5Mm'),
            bidsAddress: new PublicKey('GCnJtgrJq4pouKquUyFGzucPQx5tLC43JW9LQgTR7Fr'),
            asksAddress: new PublicKey('7iKSZm61ZFWKSPTCKskZU6QWKbBRH7UrgB4uwWBzSXE8'),
          },
          SRM: {
            marketAddress: new PublicKey('8g2t7hBTFuv2q1HkhvKsf5hPGSq3uv7ztvRCFvVaG7E2'),
            requestQueue: new PublicKey('AvmtFUwV84MRYLkuZWpBQZ4MFLfentkvAJ49nGGejnQ1'),
            eventQueue: new PublicKey('FYoHfoGS7HDGsCGfrb9CeZCsMUeHHuBhN9qjUMzPaQQQ'),
            baseVault: new PublicKey('DE7gakW5Gb43n9TQSnXLmUakVGowFU1ZhJTBEXr7Cvq5'),
            quoteVault: new PublicKey('HNMxbFLg2wrgoUxHu3bTvz1XPj9n4buioou3WaQqzwrH'),
            vaultOwner: new PublicKey('HCUkFFzirnknTGb4tHTvMpQCk1TPGaZfkdXYf8JrjUL6'),
            bidsAddress: new PublicKey('A5Tq9rLx9kEdqEAXtKiSLDCfwNAfLL8d3U4S3u3sMJZc'),
            asksAddress: new PublicKey('95Z8NkfChbDsdUM5LyLwJ5dHyS94Qjth7e9cepEzuTZs'),
          },
          RAY: {
            marketAddress: new PublicKey('8XtEufHU7TbNNChTvBhShZGZc1adHNkTmEqv4W9Q3RYK'),
            requestQueue: new PublicKey('7GEMsQ49aUqwDnum624uvjXrZyiCnEW72zw9WsFquXMq'),
            eventQueue: new PublicKey('2nvokrESHbhrfi6QHrxoASs8ziEmcs5kPKotrvJ7xRJ2'),
            baseVault: new PublicKey('HZqiavQ6wE4siwFgvDfoxsgtgLrVNbndmULdTk3FQYHe'),
            quoteVault: new PublicKey('5KRyGWDuq8KJUQxTSEf7Ku8eFLkwCFtWBXF6WJJ6jGy9'),
            vaultOwner: new PublicKey('Hk5VVfKTL1Z4o54XwykvE4Rp9qgdZY7rUCrWfGMhLLzq'),
            bidsAddress: new PublicKey('GKagffnBN64rNgu7yFko5uzPRqWCrM5UXfsbC7ZQbFxt'),
            asksAddress: new PublicKey('54K3medHRc2Q4P1oMnKS9PoANpbyswbLC9U2jCEiEhUi'),
          },
          FTT: {
            marketAddress: new PublicKey('J8Y4NY8Rzk8Y2hR7JtergtL1xLXdeguD9G8aD9gmkpyu'),
            requestQueue: new PublicKey('94uGcffyTn5SFMqBKJ7ntxeLABLqy2ADf4VpfQcMtt5U'),
            eventQueue: new PublicKey('8mMsobfCGFnqnoo3hjTCA449LRCqFv7nM5CobZGnSDij'),
            baseVault: new PublicKey('EuoNht3Uc4hcBcu5Reep54HSXgvpXrgsVsNeEeenA5kf'),
            quoteVault: new PublicKey('FTwLw8s6kUjKwfworryNSsefCZUkAUnkRuBmDjZxgGwn'),
            vaultOwner: new PublicKey('GYUYJBrsCzJUMUbTTkiCs54d2m7Vh4eDMqyKtpbs52d1'),
            bidsAddress: new PublicKey('5ZboPX8DupNM8LFTXHZBGd3JV24xcJAfHfrjFntDvLL3'),
            asksAddress: new PublicKey('7whNVtz7Seqm46D8W4poYTsjPYsxp2jsPThVHvQ1UtgH'),
          },
          MSOL: {
            marketAddress: new PublicKey('HH6wc5BUZtDE3dpp6nzpHQzyryQyk9nzeCmGz9eAkpBH'),
            requestQueue: new PublicKey('6GF9C52akeqEvvycvRjamMKHwYHc1qnzLonKVRjb8rAx'),
            eventQueue: new PublicKey('5HqNWFTGqojWHKAPiDTSyBmcDK8qQeEixXtB22WNo1y'),
            baseVault: new PublicKey('GFvzeLV8aqLJPWjSVrx3mRnZjCiiWykmNPUA4Ef2NvVy'),
            quoteVault: new PublicKey('FYbLCiUgaTiBRKnLSAPHSaDDc5QXKPHxxmpZhwaeqqon'),
            vaultOwner: new PublicKey('FV5e18t2uZv8w2qbu73qQjAGcwoTRpkn7Nf6JySJJ5oZ'),
            bidsAddress: new PublicKey('GmBGVj1aEaMeCHq9LqDJpcDQn7nGcpXvB3LCjqsWxGt7'),
            asksAddress: new PublicKey('DB89DPTikq6KEsZLsiu7snzjzM9f2ohaAt5t9kJH1THF'),
          },
        },
        USDC: new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'),
        saber: {
          stablecoinSwap: new PublicKey('MARpDPs5A7XiyCWPNH8GsMWPLxmwNn9SBmKvPa9LzgA'),
        },
      },
    },
  },
  {
    cluster: 'localnet',
    kamino: {
      mints: {
        usdt: new PublicKey('AcU8CfJiLEBn1x7Cgx8atX6DdebmdQtNSsJBkQyf6Q4L'),
        usdh: new PublicKey('kfZGSThBdZbZY6cDSHP7NmCWa6D2hFc5kjBuGHREzZ3'),
        usdc: new PublicKey('HEzfH7PCNSCU92zdk3iaKG4E9hQTErfgVGvqgywEvPzu'),
        stsol: new PublicKey('ESba8sT1R7WPiE3weBU1u6UqEmXRuM8Rs1LLvXayEizf'),
        msol: new PublicKey('2wMQTELEgEcK7V3gwZBH58WvGcRZsyaWNpebqyFugGKe'),
        sol: new PublicKey('So11111111111111111111111111111111111111112'),
        solMsol: new PublicKey('7hUuLSz41MAJTASQTr6VnrRzZ5oyf2DNmLcpTHqZVyro'),
        solStsol: new PublicKey('2MpRMgTDALUqa42DNAgqM6X8TAqRSojhvtmgM15Dei1B'),
        usdcUsdt: new PublicKey('Fk3UsY9LtbKyqU6hwuM86Rxq3HTokDKcieJjpmbn1CRn'),
        usdhUsdc: new PublicKey('HYszS8Y59xwAtmZZ5ja2XjLpvc8eHmmzc1craEdRzfMb'),
        usdhUsdt: new PublicKey('6xAFTAV3V7vbWhPgmbUrSndpE85MHNu1tUyRecX9JHS7'),
      },
    },
    scope: {
      oracleMappings: new PublicKey('4PoKkcsQakSMovMWh127gviWPpA6wGyY8uZWavccXAGE'),
      oraclePrices: new PublicKey('Aprk2sZNvxZNUpgq2WuS3VNkbxh35aCqJd1GbtBZzkG5'),
      programId: new PublicKey('3Vw8Ngkh1MVJTPHthmUbmU2XKtFEkjYvJzMqrv2rh9yX'),
      configurationAccount: new PublicKey('qAN1wkxEzBg7AzeLC4sGT61czYvDiotZTMKojVL2o2E'),
    },
    borrowing: {
      programId: new PublicKey('FAZuPmWCvPzVoSXudtMvixiGNGKyEuKvfEuJh3i6NkXu'),
      accounts: {
        stablecoinMint: new PublicKey('CkUrb2SwrriK4T7VpWjrepM4PWnfT9hwUEfz2NJmM4Hp'),
        stablecoinMintAuthority: new PublicKey('89Ecdd8J7xTycvueCuK4ML3xUheZEp917qmzKsHfCgdV'),
        hbbMintAuthority: new PublicKey('5BKFyoeZB1ZArEzq3KLxF8RhUPzBLas8kgEH5sjn16Jb'),
        borrowingVaultsV2: new PublicKey('BHgw9kZcK6LVSadiqUZYBxe8rCzTcDq1dxsJcspLmWPX'),
        mint: {
          WSOL: new PublicKey('So11111111111111111111111111111111111111112'),
          ETH: new PublicKey('B54v6dyccBv66VBTrQHqebKpBR1UNMT6UHMWZcVKJhct'),
          BTC: new PublicKey('6Rkde5L39BoXZ9b8cGXnbTwNjLa6SmmEuZQ7vdCVbiZ7'),
          SRM: new PublicKey('ai6TJHW8RgnXdfpCgFBx7d2U53ozFeVR86cvfHK2T1w'),
          RAY: new PublicKey('6e6aWyz9viDz2yoJqSiyZVwCKp5qZx8UUzesgs3y3Emd'),
          FTT: new PublicKey('6AJ9LYjCpLFekhX7Jzq6YDQrZ72oLTeQuLgGCxHw8nq2'),
          HBB: new PublicKey('HBB111SCo9jkCejsZfz8Ec8nH7T6THF8KEKSnvwT6XK6'),
          MSOL: undefined,
        },
        collateralVaultsAuthority: new PublicKey('AzrwP37zYTDh1dfbWWc3ceK2LVbijNuDvV9hS1qH96dM'),
        collateralVault: {
          SOL: new PublicKey('8CR87Meo2XbfugckHmwFbWfRnPrzqyj5dReyKdU9n4PA'),
          ETH: new PublicKey('7j92j4m7YWxWGuvjS3HNcHYRdkUp3NpkiRGTS1wdBhWm'),
          BTC: new PublicKey('CuAMwJkgvWMrkUfEoxQJWFRw8P8GtVta4HVx7DWTXDwX'),
          SRM: new PublicKey('3Z2wmrPiUHF47DrSFRZnmm4CJc9aTs3bize4QtfnGtQE'),
          RAY: new PublicKey('B1Njx94rsEAam4Am19d347t76DbxxR8pUmWLBo7MBEE'),
          FTT: new PublicKey('3xFadKYXmPUStW5UybXcmEkWrb3dBcAkhvopipKDyXd5'),
          MSOL: undefined,
        },
        redemptionsQueue: new PublicKey('DZ9nuLYkKdGmXTFUMz7FZX4EDeqkQmDL71qcivsCtHFo'),
        liquidationsQueue: new PublicKey('39NPoTCGhZ3WkZcevFX7xYyKZzYVHtvMmjsKEQpe9Ltp'),
        borrowingMarketState: new PublicKey('FiULFVsJGoi6BVQV4MZ4nRhSt5q7PMCxXhPNHedtcJK8'),
        stabilityPoolState: new PublicKey('3TahgKbYxpGp4iqtkWKy1mw8uo4FGhMzs42tgqTqcqyD'),
        epochToScaleToSum: new PublicKey('G9Ysu9DgFiUuWWWnYsRx8SvN6sfrtDY7NCaHVxgz7jeb'),
        stablecoinStabilityPoolVault: new PublicKey('21dTv2L7P52goCy4YFsM6k737yZJh3fxdL3kKtqcWCzR'),
        stabilityVaults: new PublicKey('Az4MhfSV7f7pgAnDr7UyvsiemsmrpGM39AWfkgicLawa'),
        stablecoinStabilityPoolVaultAuthority: new PublicKey('Ecg7PgFoEjX5tJw2GZN4tUKz7sh3PnSsJECcsvVkRDpq'),
        liquidationRewardsVaultSol: new PublicKey('AUznMW6M1fsGJusotrWBVHBQgNRvvucerJHVtb969Ls'),
        liquidationRewardsVaultSrm: new PublicKey('7hMX18PtEqW6z29BBCU1pWFJKoYbR3sZVZW31fD64n4y'),
        liquidationRewardsVaultEth: new PublicKey('9thYqRns8M6xXhcPTs6Ra42jt153QAjymTnU5MtHFR2F'),
        liquidationRewardsVaultBtc: new PublicKey('BxDHBQW38Wo1FgCJDbrCyYsHqpfw1gZmWCFNJbyDuf49'),
        liquidationRewardsVaultRay: new PublicKey('DuCiQJsXzXF9QKufsP8YXKqpbttaJxvx4E2LaSY4P7zz'),
        liquidationRewardsVaultFtt: new PublicKey('97Jq9TdBbKN7yxAnQMGctm7EDik7HYFTtfr4JVnSyEtS'),
        liquidationRewardsVaultAuthority: new PublicKey('FQbUdSuYtMxn9HoA649gpYVV6vh8xAiEBTHsVHm6pdAb'),
        borrowingVaults: new PublicKey('4fN86magQ4ghRfP9qfQbMnSogtJ1r6T9R7Yt7LzQSHA4'),
        globalConfig: new PublicKey('GnJoxBn17Xn5WpmUMZ2mU17TyBzLGkSxLCsczSEiHvH'),
        oracleMappings: new PublicKey('4oe3cdNdwRxv2qjXA2q4yD9aj9XdE7Yd7nBnUeunt8m7'),
        stakingPoolState: new PublicKey('8nAvRvVHAydWL743GgXMbTfXwwrPD1RDbQ69XAGG1FZy'),
        borrowingFeesAccount: new PublicKey('2pLG1oGQwFDpbCt8m8RHTWUTSKFKA56HffwESFEeFFpc'),
        borrowingFeesVaultAuthority: new PublicKey('9RXCJ66mJDcDWtNpUJknrkeda97yWLWvRnQSQjzkH2iC'),
        stakingVault: new PublicKey('D6YWbkypjqoNTUxfYZSh7ra5mD4AapHRSHRMJw8eLbn8'),
        treasuryVault: new PublicKey('4UAr1CWXFensisCGBWnSdU4dTAsa5AWtzDpYDSfbQJmc'),
        burningVault: new PublicKey('HKpANDh2zs5vChFZKse7nny9Xt5nUxqoXQahc3QrXCZ4'),
        burningVaultAuthority: new PublicKey('AbUWAzTWd1fkbV3FDzU69HJf2ntvyzUEnN5FjP5HVHhc'),
        pyth: {
          solProductInfo: new PublicKey('Bxd5yBjGL29twaLP2B1Lf6YjFFXRcUmqTz7v32BeHsTN'),
          solPriceInfo: new PublicKey('FweBx8gsTNGf1YyebZK7jPqn9SYiyptT2UUYV5pK3Scn'),
          ethProductInfo: new PublicKey('8TtUqogFv4srq3S56hVjYeyeY1Xxw4Nt9HqjDY2Pfg2Y'),
          ethPriceInfo: new PublicKey('CUug7XgabHU4X7ca7ZCesCJWnrHbK1pMCAaSxQ9RZBYo'),
          btcProductInfo: new PublicKey('7TaVKytXHEdEnG8dT6d3rf39jzY3mTrq23fYE66h1L2o'),
          btcPriceInfo: new PublicKey('ADfQ2g1DkJuTadSNW5Ssq71qd2mvmtsqv2Dn87xZx5Sb'),
          srmProductInfo: new PublicKey('Dyswi54xNFLxuTWdzah7d3HsN5dM9WQ2UTXFLfwMoZDa'),
          srmPriceInfo: new PublicKey('Covgt34sxCzsz9FS6wXss2zFmzRnsUfRbsGDuSvnNgSb'),
          rayProductInfo: new PublicKey('2gX5FKPh3kubLzHu4Pm7YMJFoWB7rx4qAdDBz5fqp1xr'),
          rayPriceInfo: new PublicKey('814AnnK8hLC3iriRGjakb1vo2tBgJknmsuG18bxauZr7'),
          fttProductInfo: new PublicKey('6U3UDYYdi7ryqgA7fs7xqK5C9coQyx1mxxvu7XzuLF95'),
          fttPriceInfo: new PublicKey('G7kqVzuayYqaCtGSZx1dJapdFWkRc18PoGaTg6Gv7z9k'),
          msolProductInfo: undefined,
          msolPriceInfo: undefined,
        },
        liquidationRewardsVaultMsol: undefined,
        USDC: undefined,
        serumMarkets: undefined,
        redemptionCandidatesQueue: undefined,
        saber: {
          stablecoinSwap: new PublicKey('MARpDPs5A7XiyCWPNH8GsMWPLxmwNn9SBmKvPa9LzgA'),
        },
      },
    },
  },
];
