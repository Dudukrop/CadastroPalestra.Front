import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function Notificacao(props) {
	const [open, setOpen] = React.useState(false);

	React.useEffect(() => {
		setOpen(props.open ?? false);
	}, [props.open]);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		props.close(false)
		setOpen(false);
	};

	return (
		<div>
			<Snackbar
				open={open}
				severity="success"
				autoHideDuration={4000}
				onClose={handleClose}
			>
				<Alert
					onClose={handleClose}
					severity="success"
					variant="filled"
					sx={{ width: '100%' }}
				>
					{props.message}
				</Alert>
			</Snackbar>
		</div>
	);
}