/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Button } from '@antmjs/vantui'

export default function Demo() {
  return (
    <>
      <Button disabled type="primary">
        禁用状态
      </Button>
      <Button disabled type="info">
        禁用状态
      </Button>
    </>
  )
}
