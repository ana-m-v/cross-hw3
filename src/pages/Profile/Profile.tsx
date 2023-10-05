import React, { useState, useEffect } from "react";
import {
  IonInput,
  IonButton,
  IonToast,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage,
  IonAvatar,
} from "@ionic/react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { getDoc, doc, updateDoc, setDoc } from "firebase/firestore/lite";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firestore, storage } from "../../firebaseConfig";

const Profile: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [profilePictureUrl, setProfilePictureUrl] = useState<string>("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState<string>("");

  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setEmail(user.email || "");
    }
  }, [user]);

  const handleUpdateProfile = async () => {
    try {
      if (user) {
        await updateProfile(user, { displayName: name });
        await updateDoc(doc(firestore, "profiles", user.uid), {
          name,
          address,
        });

        if (profilePicture) {
          const storageRef = ref(
            storage,
            `profile-photos/${user.uid}/photo.jpg`
          );
          await uploadBytes(storageRef, profilePicture);
          const photoDownloadURL = await getDownloadURL(storageRef);

          console.log("url img ", photoDownloadURL);

          await updateDoc(doc(firestore, "profiles", user.uid), {
            photoUrl: photoDownloadURL,
          });
          setProfilePictureUrl(photoDownloadURL);
          setProfilePicture(null);
        }

        setShowToast(true);
        setToastMessage("Profile updated successfully!");
      }
    } catch (error) {
      setShowToast(true);
      setToastMessage("Error updating profile");
      console.error(error);
    }
  };

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (user) {
        const userDoc = await getDoc(doc(firestore, "profiles", user.uid));
        const storageRef = ref(storage, `profile-photos/${user.uid}/photo.jpg`);
        const photoDownloadURL = await getDownloadURL(storageRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          setName(userData.name);
          setAddress(userData.address);
          setProfilePicture(userData.profilePicture);
          setProfilePictureUrl(photoDownloadURL);
        }
      }

      setShowToast(true);
      setToastMessage("User signed in successfully!");
    } catch (error) {
      console.error(error);
      setShowToast(true);
      setToastMessage("Error signing in");
    }
  };

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // Create profile document
      const profileRef = doc(firestore, "profiles", user.uid);
      await setDoc(profileRef, {
        uid: user.uid,
        name,
        address,
        email,
      });

      // Upload profile picture if provided
      if (profilePicture) {
        const storageRef = ref(storage, `images/${user.uid}`);
        await uploadBytes(storageRef, profilePicture);
      }

      // setUser(user);

      setShowToast(true);
      setToastMessage("User signed up successfully!");
    } catch (error) {
      console.error(error);
      setShowToast(true);
      setToastMessage("Error signing up");
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setShowToast(true);
      setToastMessage("User signed out successfully!");
      setName("");
      setAddress("");
      setEmail("");
      setPassword("");
      setProfilePictureUrl("");
    } catch (error) {
      setShowToast(true);
      setToastMessage("Error signing out");
      console.error(error);
    }
  };
  console.log("prof p url ", profilePictureUrl);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="profile-container">
          {user && (
            <>
              <IonAvatar>
                <img src={profilePictureUrl || ""} />
              </IonAvatar>
              <IonInput
                label="Name"
                labelPlacement="stacked"
                className="profile-input"
                value={name}
                onIonChange={(e) => setName(e.detail.value!)}
                placeholder="Name"
              />
              <IonInput
                label="Address"
                labelPlacement="stacked"
                className="profile-input"
                value={address}
                onIonChange={(e) => setAddress(e.detail.value!)}
                placeholder="Address"
              />
              <input
                className="file-input"
                type="file"
                onChange={(e) => {
                  const file = e.target?.files?.[0];
                  if (file) {
                    setProfilePicture(file);
                  }
                }}
              />
              <IonButton className="save-button" onClick={handleUpdateProfile}>
                Update Profile
              </IonButton>
              <IonButton className="logout-button" onClick={handleSignOut}>
                Logout
              </IonButton>
            </>
          )}
          {!user && (
            <>
              <IonInput
                label="Name"
                labelPlacement="stacked"
                className="profile-input"
                value={name}
                onIonChange={(e) => setName(e.detail.value!)}
                placeholder="Name"
              />
              <IonInput
                label="Address"
                labelPlacement="stacked"
                className="profile-input"
                value={address}
                onIonChange={(e) => setAddress(e.detail.value!)}
                placeholder="Address"
              />
              <IonInput
                label="Email"
                labelPlacement="stacked"
                className="profile-input"
                value={email}
                onIonChange={(e) => setEmail(e.detail.value!)}
                placeholder="Email"
              />
              <IonInput
                label="Password"
                labelPlacement="stacked"
                className="profile-input"
                type="password"
                value={password}
                onIonChange={(e) => setPassword(e.detail.value!)}
                placeholder="Password"
              />
              <input
                className="file-input"
                type="file"
                onChange={(e) => {
                  const file = e.target?.files?.[0];
                  if (file) {
                    setProfilePicture(file);
                  }
                }}
              />
              <IonButton className="save-button" onClick={handleSignUp}>
                Sign Up
              </IonButton>
              <IonButton className="save-button" onClick={handleSignIn}>
                Sign In
              </IonButton>
            </>
          )}

          <IonToast
            isOpen={showToast}
            message={toastMessage}
            duration={2000}
            onDidDismiss={() => setShowToast(false)}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
