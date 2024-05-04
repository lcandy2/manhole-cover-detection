'use client';

import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
import Chart from './chart';
import { useEffect } from 'react';

const test = [
  { name: '井盖破损', value: 1230 },
  { name: '井盖未盖（翘起）', value: 751 },
  { name: '井盖完好', value: 471 },
  { name: '井圈问题', value: 280 },
  { name: '井盖缺失', value: 78 }
];

const status = [
  { name: '已成功识别', value: 2810 },
  { name: '队列中任务', value: 341 },
  { name: '需再次确认', value: 271 },
  { name: '识别异常', value: 91 }
];

const problems = [
  { name: '已处理问题', value: 789 },
  { name: '待处理问题', value: 564 },
  { name: '待分配任务', value: 191 }
];

const data = [
  {
    category: '井盖状态',
    stat: '2,810',
    data: test
  },
  {
    category: '识别系统状态',
    stat: '3,513',
    data: status
  },
  {
    category: '问题处理情况',
    stat: '1,544',
    data: problems
  }
];

export default function IndexPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
        {data.map((item) => (
          <Card key={item.category}>
            <Title>{item.category}</Title>
            <Flex
              justifyContent="start"
              alignItems="baseline"
              className="space-x-2"
            >
              <Metric>{item.stat}</Metric>
              <Text>次</Text>
            </Flex>
            <Flex className="mt-6">
              <Text>类别</Text>
              <Text className="text-right">数量</Text>
            </Flex>
            <BarList
              data={item.data}
              valueFormatter={(number: number) =>
                Intl.NumberFormat('us').format(number).toString()
              }
              className="mt-2"
            />
          </Card>
        ))}
      </Grid>
      <Chart />
    </main>
  );
}
