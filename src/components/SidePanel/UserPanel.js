import React from 'react'
import { Grid, Icon, Header, GridRow, Dropdown } from 'semantic-ui-react'

export default function UserPanel() {
  const userActions = () => [
    {
      key: 'user',
      text: (
        <span>
          Signed in as: <strong>user</strong>
        </span>
      ),
      disabled: true,
    },

    {
      key: 'avatar',
      text: <span>Change Avatar</span>,
    },
    {
      key: 'signOut',
      text: <span>Sign Out</span>,
    },
  ]
  return (
    <Grid>
      <Grid.Column>
        <Grid.Row style={{ padding: '1.2em', margin: 0 }}>
          <Header as="h3" inverted floated="left">
            <Icon name="code" />
            <Header.Content>Greetings!</Header.Content>
          </Header>
        </Grid.Row>
        {/* User menu */}
        <Header inverted inverted as="h4" style={{ padding: '1.2em' }}>
          <Dropdown trigger={<span>User</span>} options={userActions()} />
        </Header>
      </Grid.Column>
    </Grid>
  )
}