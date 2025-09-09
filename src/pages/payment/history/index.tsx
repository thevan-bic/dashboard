import { BasicContent } from '@/components';
import TransactionDashboard from './list';

export default function PaymentHistory() {
    return (
        <BasicContent>
            <h1>Payment Histories</h1>
            <TransactionDashboard />
        </BasicContent>
    );
}
