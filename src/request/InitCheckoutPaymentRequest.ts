import Currency from '../model/Currency';
import PaymentGroup from '../model/PaymentGroup';
import PaymentPhase from '../model/PaymentPhase';

import PaymentItem from './dto/PaymentItem';

type InitCheckoutPaymentRequest = {
  price: number;
  paidPrice: number;
  buyerMemberId?: number;
  currency: Currency;
  paymentGroup?: PaymentGroup;
  paymentPhase?: PaymentPhase;
  conversationId?: string;
  externalId?: string;
  cardUserKey?: string;
  callbackUrl: string;
  merchantWebhookUrl?: string;
  clientIp?: string;
  enabledInstallments: number[];
  alwaysStoreCardAfterPayment: boolean;
  allowOnlyStoredCards: boolean;
  allowOnlyCreditCard?: boolean;
  items: PaymentItem[];
};

export default InitCheckoutPaymentRequest;
