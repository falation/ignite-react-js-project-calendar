import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

import { Container, Header } from '../styles'
import { ConnectedBox, ConnectedItem } from './styles'

export default function ConnectCalendar() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>
        <MultiStep currentStep={2} size={4} />
      </Header>

      <ConnectedBox>
        <ConnectedItem>
          <Text>Google Calendar</Text>
          <Button size="sm" variant="secondary">
            Conectar
            <ArrowRight />
          </Button>
        </ConnectedItem>

        <Button>
          Próximo passo
          <ArrowRight />
        </Button>
      </ConnectedBox>
    </Container>
  )
}