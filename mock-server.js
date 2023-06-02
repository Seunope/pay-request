import {createServer, Response} from 'miragejs';

const server = createServer({
  routes() {
    this.namespace = 'api';
    this.urlPrefix = 'https://dev.ileero.com.ng';

    this.get('/user/1234', () => {
      return {
        data: {
          id: 'b096d4f3-c30d-465b-9887-5a45db26a13f',
          gender: 'M',
          status: 'APPROVED',
          lastName: 'Pay',
          password: 'xxxxxxxx',
          photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
          email: 'develper@ileero.com',
          firstName: 'Ileero',
          phoneNumber: '+447809284029',
          createdDateTime: '2021-03-09T12:53:38',
          modifiedDateTime: '2023-05-30T16:41:48',
        },
        status: true,
      };
    });

    this.get('/transactions', () => {
      return {
        data: [
          {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2p8ba',
            fullName: 'Shola Ajayi',
            date: 'April6, 20202 9:45:09am',
            amount: '70050',
          },
          {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            fullName: 'Judge Ajayi',
            date: 'April6, 20202 9:45:09am',
            amount: '9000',
          },
          {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            fullName: 'John Doe',
            date: 'April6, 20202 9:45:09am',
            amount: '456',
          },
          {
            id: '68694a0f-3da1-431f-bd56-142371e29d7o2',
            fullName: 'Bedemi Uche',
            date: 'April6, 20202 9:45:09am',
            amount: '7600',
          },
        ],
        status: true,
      };
    });

    this.get('/transaction/1234', () => {
      return {
        data:{
          type: 'DEBIT',
          status: {
            label: 'Completed',
            value: 'COMPLETED',
          },
          userId: 'bf871a29-c61a-4ea0-a806-c09b0faaa2d1',
          firstName: 'Austine',
          remittance: {
            ask: '940',
            bid: '935',
            fee: {
              amount: '18.00',
            },
          },
          pay: {
            amount: '618.00',
          },
          remit: {
            amount: '600',
          },
          purpose: 'Family Maintenance',
          settlement: {
            amount: '564000',
          },
          paymentMethod: 'PAYMENT_GATEWAY',
          deliveryMethod: {
            fees: {
              amount: 3,
            },
            label: 'Bank Deposit',
          },
          sourceCurrency: {
            currencyCode: 'GBP',
            currencyName: 'UK',
          },
          sourceOfIncome: 'Business Income',
          targetCurrency: {
            currencyCode: 'NGN',
            currencyName: 'Nigerian Naira',
          },
          beneficiary: {
            lastName: 'Joseph',
            firstName: 'Omolayo',
            bankDetails: {
              accountNumber: '1234567890',
            },
          },
          referenceNo: 'ILEERO74373106',
          emailAddress: 'beneficiary@ileero.com',
          paymentStatus: {
            label: 'Payment Authorised',
            value: 'PAYMENT_AUTHORISED',
          },
          transactionId: '9da19bf7-e870-4ed3-9396-cd7ecda979cd',
          paymentGateway: 'ILEERO',
          creationDateTime: '2023-05-30T17:08:40',
          modifiedDateTime: '2023-05-30T17:14:59',
        },
        status: true,
      };
    });

    this.post('/transaction/1234', (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      attrs.id = Math.floor(Math.random() * 100);

      return {transaction: attrs};
    });

    this.post('/payment/success', () => {
      let headers = {};
      let data = {errors: ['Server did not respond']};

      return new Response(500, headers, data);
    });

    this.post('/payment/failed', () => {
      let headers = {};
      let data = {errors: ['Server did not respond']};

      return new Response(500, headers, data);
    });

    this.get('/movies', () => {
      return {
        movies: [
          {id: 1, name: 'Inception', year: 2010},
          {id: 2, name: 'Interstellar', year: 2014},
          {id: 3, name: 'Dunkirk', year: 2017},
        ],
      };
    });
  },
});

export default server;
