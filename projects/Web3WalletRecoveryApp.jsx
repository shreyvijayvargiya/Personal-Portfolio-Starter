import React from "react";

const Web3WalletRecoveryApp = () => {
	return (
		<div className="text-black text-left">
			<p className="text-5xl">Web3 wallet recovery app</p>
			<p className="text-md">
				Recover your web3 wallet using a mnemonic seed phrase. The application
				contains one home screen where the user can enter his mnemonic seed
				phrase to recover his address and private key. The user address is
				listed in modal components so far to fulfil the requirements of showing
				balance along with the address. Private keys are stored in keychains or
				keychain stores. Currently, the Home screen contains only one Input to
				add 12-word phrases but we can provide 12 different input fields for
				that to give an intuitive interface to the user. Due to time boundation,
				I can't create more intuitive UI screens and better feedback mechanism
				just like production based application. We can also provide better
				feedback for example adding toast if the wrong seed phrase is entered.
				Currently, we are showing only an error message.
			</p>
			<a
				className="underline text-indigo-500 hover:text-indigo-600"
				href="https://github.com/shreyvijayvargiya/Wallet-Recovery-App"
				target="_blank"
			>
				Github Repo
			</a>
			<br />
			<p className="text-4xl">Tech Stack</p>
			<ol className="list-disc px-8">
				<li>React</li>
				<li>React Native</li>
			</ol>
			<p>
				Furthermore, important packages used are ethers, ethereum-wallet and
				rn-nodify to deal with web3 blockchain networks for react native
				applications like this one and react-native-key-chains are used to store
				secure/api/sensitive keys. Suggestions: We can go for EXPO GO to build
				fast in addition we can anytime eject back to create-react-native-app.
			</p>
			<br />
			<p className="text-4xl">Architechture</p>
			<p>
				The root directory contains the src folder as the source directory.
				Inside src following directories are as follows
			</p>
			<ol className="list-disc px-8">
				<li>components: contains screens components</li>
				<li>modules: contains reusable components like BottomTab</li>
				<li>packages: contains hooks, APIs and reusable methods</li>
				<li>redux: contains state management tools like redux</li>
			</ol>
			<p>
				Each folder has its significance where it fulfils the code-separation
				concern while taking care of scalability.
			</p>
		</div>
	);
};
export default Web3WalletRecoveryApp;
