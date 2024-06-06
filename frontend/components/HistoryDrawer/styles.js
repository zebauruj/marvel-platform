const styles = {
  mainGridProps: {
    container: true,
    item: true,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  drawerGridProps: {
    width: '698px',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    sx: {
      '& .MuiDrawer-paper': {
        background: '#fff',
        width: '698px',
        p: '10px 40px',
      },
    },
  },
  headerGridProps: {
    container: true,
    item: true,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'relative',
    sx: {
      color: 'black',
    },
  },
  titleProps: {
    fontFamily: 'Satoshi Bold',
    fontSize: '24px',
    fontWeight: 700,
  },
  dateProps: {
    display: 'flex',
    fontFamily: 'Satoshi Regular',
    fontSize: '12px',
    fontWeight: 700,
    borderRadius: 58,
    border: '1px solid rgba(0, 0, 0, 0.12)',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptionProps: {
    fontFamily: 'Satoshi Regular',
    fontSize: '18px',
    fontWeight: 700,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    color: '#B8B8B8',
  },
  underlineProps: {
    borderBottom: '2px solid #B8B8B8',
    width: '100%',
    my: '10px',
  },
  listGridProps: {
    container: true,
    item: true,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  listProps: {
    fontFamily: 'Satoshi Regular',
    fontSize: '18px',
    fontWeight: 700,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  listTitleProps: {
    fontFamily: 'Satoshi Bold',
    fontSize: '18px',
    fontWeight: 700,
    color: 'black',
  },
  listItemGridProps: {
    container: true,
    item: true,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  listItemProps: {
    sx: {
      color: 'black',
      fontFamily: 'Satoshi Regular',
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: '14px',
      textTransform: 'lowercase',
    },
  },
  answerKeyGridProps: {
    container: true,
    item: true,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  answerKeyTitleProps: {
    fontFamily: 'Satoshi Bold',
    fontSize: '18px',
    fontWeight: 700,
    color: 'black',
  },
  answerKeyItemProps: {
    sx: {
      color: 'black',
      fontFamily: 'Satoshi Regular',
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: '14px',
      textTransform: 'lowercase',
    },
  },
};

export default styles;
