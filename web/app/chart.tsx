'use client';

import { AreaChart, Card, Text, Title } from '@tremor/react';

const data = [
  {
    Month: '2 月',
    '完好': 2890,
    '存在潜在问题': 1400,
    '无法识别': 432
  },
  {
    Month: '3 月',
    '完好': 1890,
    '存在潜在问题': 1398,
    '无法识别': 198
  },
  {
    Month: '4 月',
    '完好': 3890,
    '存在潜在问题': 2980,
    '无法识别': 689
  }
];

export default function Chart() {
  return (
    <Card className="mt-8">
      <Title>总览</Title>
      <AreaChart
        className="mt-4 h-80"
        data={data}
        categories={['完好', '存在潜在问题', '无法识别']}
        index="Month"
        colors={['indigo', 'orange-600', 'fuchsia-700']}
        valueFormatter={(number: number) =>
          `${Intl.NumberFormat('cn').format(number).toString()}个`
        }
        yAxisWidth={60}
      />
    </Card>
  );
}
