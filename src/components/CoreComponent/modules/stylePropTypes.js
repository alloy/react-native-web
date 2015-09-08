import { PropTypes } from 'react'

const numberOrString = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string
])

const { string } = PropTypes

export default {
  alignContent: string,
  alignItems: string,
  alignSelf: string,
  backfaceVisibility: string,
  // background
  backgroundAttachment: string,
  backgroundClip: string,
  backgroundColor: string,
  backgroundImage: string,
  backgroundOrigin: string,
  backgroundPosition: string,
  backgroundRepeat: string,
  backgroundSize: string,
  // border color
  borderColor: numberOrString,
  borderBottomColor: numberOrString,
  borderLeftColor: numberOrString,
  borderRightColor: numberOrString,
  borderTopColor: numberOrString,
  // border-radius
  borderRadius: numberOrString,
  borderTopLeftRadius: numberOrString,
  borderTopRightRadius: numberOrString,
  borderBottomLeftRadius: numberOrString,
  borderBottomRightRadius: numberOrString,
  // border style
  borderStyle: numberOrString,
  borderBottomStyle: numberOrString,
  borderLeftStyle: numberOrString,
  borderRightStyle: numberOrString,
  borderTopStyle: numberOrString,
  // border width
  borderWidth: numberOrString,
  borderBottomWidth: numberOrString,
  borderLeftWidth: numberOrString,
  borderRightWidth: numberOrString,
  borderTopWidth: numberOrString,
  bottom: numberOrString,
  boxSizing: string,
  clear: string,
  color: string,
  cursor: string,
  direction: string,
  display: string,
  flexBasis: string,
  flexDirection: string,
  flexGrow: numberOrString,
  flexShrink: numberOrString,
  flexWrap: string,
  float: string,
  font: string,
  fontFamily: string,
  fontSize: string,
  fontStyle: string,
  fontWeight: string,
  height: numberOrString,
  justifyContent: string,
  left: numberOrString,
  letterSpacing: string,
  lineHeight: numberOrString,
  // margin
  margin: numberOrString,
  marginBottom: numberOrString,
  marginLeft: numberOrString,
  marginRight: numberOrString,
  marginTop: numberOrString,
  // min/max
  maxHeight: numberOrString,
  maxWidth: numberOrString,
  minHeight: numberOrString,
  minWidth: numberOrString,
  opacity: numberOrString,
  order: numberOrString,
  overflow: string,
  overflowX: string,
  overflowY: string,
  // padding
  padding: numberOrString,
  paddingBottom: numberOrString,
  paddingLeft: numberOrString,
  paddingRight: numberOrString,
  paddingTop: numberOrString,
  position: string,
  right: numberOrString,
  textAlign: string,
  textDecoration: string,
  textTransform: string,
  top: numberOrString,
  userSelect: string,
  visibility: string,
  whiteSpace: string,
  width: numberOrString,
  wordWrap: string,
  zIndex: numberOrString
}