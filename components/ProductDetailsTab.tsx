import * as React from 'react';
import { Col, Row, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import { TabState, TabProps } from '../interfaces';
import { ProductTabs } from '../styles';

class ProductDetailsTab extends React.Component<TabProps, TabState> {
  state: TabState;

  constructor ( props: TabProps ) {
    super( props );
    this.state = {
      activeTab : 0
    };
  }

  public toggle = ( tab: number ) => {
    if ( this.state.activeTab !== tab ) {
      this.setState( {
        activeTab : tab
      } );
    }
  };

  render () {
    return (
      <ProductTabs>
        <Nav tabs>
          { this.props.titles.map( ( title, key ) =>
            <NavItem key={ key }>
              <NavLink
                className={ classnames( { active : this.state.activeTab === key } ) }
                onClick={ () => {
                  this.toggle( key );
                } }>
                { title }
              </NavLink>
            </NavItem> ) }
        </Nav>
        <TabContent activeTab={ this.state.activeTab }>
          { this.props.contents.map( ( content, key ) =>
            <TabPane tabId={ key } key={ key }>
              <Row>
                <Col sm="12">
                  { content }
                </Col>
              </Row>
            </TabPane> ) }
        </TabContent>
      </ProductTabs>
    );
  }
}

export default ProductDetailsTab;
