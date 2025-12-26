import React from 'react';
import { CreditCard, DollarSign, ArrowDownLeft, ArrowUpRight } from 'lucide-react';
import { Card, CardHeader, CardBody } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';

const transactions = [
  {
    id: 1,
    title: 'Investment Received',
    amount: '+ $50,000',
    date: '2024-02-20',
    type: 'income',
    status: 'Completed',
  },
  {
    id: 2,
    title: 'Platform Fee',
    amount: '- $1,200',
    date: '2024-02-18',
    type: 'expense',
    status: 'Completed',
  },
  {
    id: 3,
    title: 'Pending Payout',
    amount: '+ $10,000',
    date: '2024-02-16',
    type: 'income',
    status: 'Pending',
  },
];

export const PaymentsPage: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Payments</h1>
          <p className="text-gray-600">Manage your transactions and balance</p>
        </div>

        <Button leftIcon={<CreditCard size={18} />}>
          Add Payment Method
        </Button>
      </div>

      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardBody className="flex items-center">
            <DollarSign className="text-success-600 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Total Balance</p>
              <p className="text-lg font-semibold">$120,500</p>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex items-center">
            <ArrowDownLeft className="text-primary-600 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Total Income</p>
              <p className="text-lg font-semibold">$160,000</p>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex items-center">
            <ArrowUpRight className="text-error-600 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Total Expenses</p>
              <p className="text-lg font-semibold">$39,500</p>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Transactions */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-medium text-gray-900">Recent Transactions</h2>
        </CardHeader>
        <CardBody className="space-y-3">
          {transactions.map(tx => (
            <div
              key={tx.id}
              className="flex justify-between items-center p-4 rounded-lg hover:bg-gray-50"
            >
              <div>
                <p className="font-medium text-gray-900">{tx.title}</p>
                <p className="text-sm text-gray-500">{tx.date}</p>
              </div>

              <div className="text-right">
                <p
                  className={`font-semibold ${
                    tx.type === 'income'
                      ? 'text-success-600'
                      : 'text-error-600'
                  }`}
                >
                  {tx.amount}
                </p>
                <Badge variant={tx.status === 'Completed' ? 'success' : 'warning'}>
                  {tx.status}
                </Badge>
              </div>
            </div>
          ))}
        </CardBody>
      </Card>
    </div>
  );
};
